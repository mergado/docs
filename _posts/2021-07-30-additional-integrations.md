---
layout: page
title: "Additional Integrations"
category: developers
date: 2021-07-30 16:54:58
active_item: ""
order: 1
mergadoButtonHtml: |
    <a role="button" class="mergado-prefill-button" href="https://app.mergado.com/new-project/prefill/?url=<feed_url>">
        <svg class="icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L20 20 L0 40 Z" fill="#7FB92F" />
            <path d="M20 20 L40 40 L0 40 Z" fill="#427B27" />
            <path d="M20 20 L40 0 L40 40 Z" fill="#44A8B7" />
        </svg>
        <span>Vytvořit projekt</span>
    </a>

    <style>
        .mergado-prefill-button {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 12pt;
            border: 2px solid #0c7d3e;
            padding: 10px 20px;
            background: white;
            color: #383632;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.1s ease;
        }

        .mergado-prefill-button:visited,
        .mergado-prefill-button:active,
        .mergado-prefill-button:hover {
            color: #383632;
            text-decoration: none;
        }

        .mergado-prefill-button .icon {
            height: 20px;
            width: auto;
            transition: filter 0.1s ease;
        }

        .mergado-prefill-button:hover {
            background: #0c7d3e;
            color: white;
        }

        .mergado-prefill-button:hover .icon {
            filter: brightness(0) invert(1);
        }
    </style>

---

## Creating new projects easily

If you want to integrate your software — whether it's a Mergado platform app or any other web app — with Mergado by allowing your users to create a **new project** in Mergado quickly and easily, we offer you a _"prefill URL"_ which navigates the user's browser to the _"new project wizard"_ page, with the input feed URL, or even additional settings, already filled in:

#### Minimal version
`https://app.mergado.com/new-project/prefill/?url=<feed_url>`

#### With additional options
```
https://app.mergado.com/new-project/prefill/
?url=<feed_url>
&eshopName=<eshop_name>
&inputFormat=<input_format_id>
&outputFormat=<output_format_id>
```

### GET Parameters Explained
- `url`: The URL of the input feed to prefill the New Project Wizard with.
- `eshopName`: The name of the e-shop to prefill in the wizard. If the current user already has an e-shop with this name, it will be preselected. Otherwise, the e-shop will be created for that user once the wizard is completed.
- `inputFormat`: The ID of the input format to prefill for the new project.
- `outputFormat`: The ID of the output format to prefill for the new project.

{: .message.info}
**Note:** List of supported input and/or output formats and their IDs is a living thing and changes with time. If needed, please consult the Mergado staff.

## Styled HTML button

You can use this button/link to lead your users to the URL mentioned above. Minor variations of the styling and the text are possible to fit your needs.

{{ page.mergadoButtonHtml }}

### HTML
```html
{{ page.mergadoButtonHtml }}
```
