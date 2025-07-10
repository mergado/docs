#!/usr/bin/env python3

import argparse
import os
from pathlib import Path
from datetime import date, datetime
import subprocess
import sys

def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Create a Jekyll page in _posts"
    )
    parser.add_argument("title", nargs="?", help="Title of the page")
    parser.add_argument("category", nargs="?", help="Category for the page")
    parser.add_argument("filename", nargs="?", help="Optional filename")
    parser.add_argument("-e", "--edit", action="store_true", help="Edit the page")
    parser.add_argument("-l", "--link", action="store_true", help="Relink pages")
    parser.add_argument("-p", "--path", default=str(Path(__file__).resolve().parent.parent),
                        help="Path to project root")
    return parser.parse_args()

def slugify(text: str) -> str:
    import re
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s]", "", text)
    return re.sub(r"\s+", "-", text)

def ensure_posts_dir_exists(posts_dir: Path) -> None:
    if not posts_dir.exists() or not posts_dir.is_dir():
        print(f"{posts_dir} directory does not exist")
        sys.exit(1)

def relink_pages(posts_dir: Path) -> None:
    for entry in posts_dir.iterdir():
        if entry.name.startswith(".") or not entry.is_file():
            continue
        # Example use of parsed name for future linking logic
        match = entry.name.lstrip().split("-", 3)
        if len(match) == 4:
            rest = match[3]
            abspath = entry.resolve()
            # You could add your own relinking logic here

def create_post(filepath: Path, title: str, category: str) -> None:
    now = datetime.now().strftime("%F %T")
    content = f"""---
layout: page
title: "{title}"
category: {category}
date: {now}
active_item: ""
order: 1
---

"""
    filepath.write_text(content)
    print(f"Created {filepath}")

def open_in_editor(filepath: Path) -> None:
    editor = os.environ.get("EDITOR")
    if not editor:
        print("No $EDITOR variable set")
        sys.exit(1)
    subprocess.run([editor, str(filepath)])

def main() -> None:
    args = parse_arguments()
    base_dir = Path(args.path).resolve()
    posts_dir = base_dir / "_posts"

    ensure_posts_dir_exists(posts_dir)

    if args.link:
        relink_pages(posts_dir)

    if not args.title or not args.category:
        if not args.link:
            print("Usage: jekyll-page TITLE CATEGORY [FILENAME] [OPTIONS]")
        return

    filename = args.filename or slugify(args.title)
    today_str = date.today().strftime("%F")
    filepath = posts_dir / f"{today_str}-{filename}.md"

    if filepath.exists():
        print(f"File {filepath} already exists")
        return

    create_post(filepath, args.title, args.category)

    if args.edit:
        open_in_editor(filepath)

if __name__ == "__main__":
    main()
