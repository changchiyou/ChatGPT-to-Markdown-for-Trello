// ==UserScript==
// @name         ChatGPT-to-Markdown-for-Trello
// @namespace    https://chat.openai.com/
// @version      1.0.2
// @description  Convert ChatGPT conversation text to Markdown for Trello
// @match        https://chat.openai.com/*
// @grant        GM_setClipboard
// @grant        window.onurlchange
// @updateURL    https://raw.githubusercontent.com/changchiyou/ChatGPT-to-Markdown-for-Trello/main/scripts/chatgpt2markdown.user.js
// @downloadURL  https://raw.githubusercontent.com/changchiyou/ChatGPT-to-Markdown-for-Trello/main/scripts/chatgpt2markdown.user.js
// ==/UserScript==

(function() {
    'use strict';

    let processedWhiteSpaces = new Set();

    function h(html) {
        // remove the head tab of code blocks
        const divRegex = /<div\s+class="flex\s+items-center\s+relative\s+text-gray-200\s+bg-gray-800\s+px-4\s+py-2\s+text-xs\s+font-sans\s+justify-between\s+rounded-t-md"[^>]*>.*?<\/div>/g;
        const withoutDiv = html.replace(divRegex, '');

        return withoutDiv.replace(/<\/pre>/g, '\n')
            .replace(/<p>/g, '')
            .replace(/<\/p>/g, '\n')
            .replace(/<b>/g, '**')
            .replace(/<\/b>/g, '**')
            .replace(/<i>/g, '_')
            .replace(/<\/i>/g, '_')
            .replace(/<li>/g, '\n1. ')
            .replace(/<\/li>/g, '')
            .replace(/<ol>/g, '\n')
            .replace(/<\/ol>/g, '\n')
            .replace(/<code[^>]*>/g, (match) => {
                const languageMatch = match.match(/class="[^"]*language-([^"]*)"/);
                return languageMatch ? '\n\n```' + languageMatch[1] + '\n' : '```';
            })
            .replace(/<\/code[^>]*>/g, '```')
            .replace(/<[^>]*>/g, '')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&amp;/g, '&')
            .trim();
    }

    function transformToMarkdown() {
        const elements = document.querySelectorAll('.text-base');
        let content = '';

        for (const element of elements) {
            const whiteSpace = element.querySelector('.whitespace-pre-wrap');

            if (whiteSpace) {
                const htmlContent = whiteSpace.innerHTML;
                if (!processedWhiteSpaces.has(htmlContent)) {
                    content += content === '' ? '' : '--------\n\n';
                    content += `**${element.querySelectorAll('img').length >= 1 ? element.querySelectorAll('img')[0].alt : 'ChatGPT'}**: ${h(whiteSpace.innerHTML)}\n\n`;
                    processedWhiteSpaces.add(htmlContent);
                }
            }
        }

        try {
            GM_setClipboard(content);
            alert('Content copied to clipboard!');
        } catch (error) {
            alert('Could not copy to clipboard: ' + error);
        }
    }

    function createButton() {
        const existingButton = document.querySelector('.markdown-btn');
        if (existingButton) {
            return;
        }

        const button = document.createElement('button');
        button.innerText = 'Markdown';
        button.className = 'btn relative btn-neutral markdown-btn';
        button.addEventListener('click', transformToMarkdown);

        const targetElement = document.querySelector('.flex.gap-2.pr-1');

        if (targetElement) {
            targetElement.appendChild(button);
        }
    }

    function observeDOM() {
        const observer = new MutationObserver(() => {
            createButton();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    observeDOM();

})();