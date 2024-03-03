// ==UserScript==
// @name         ChatGPT-to-Markdown-for-Trello
// @namespace    https://chat.openai.com/
// @version      2.0.0
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

    function removeClassFromHTML(htmlString, classNameToRemove) {
        // Create a virtual body element to hold `htmlString`
        var tempBody = document.createElement('body');
        tempBody.innerHTML = htmlString;

        // Use DOM  to find all elements with `classNameToRemove` and delete them
        var elementsToRemove = tempBody.getElementsByClassName(classNameToRemove);
        for (var i = elementsToRemove.length - 1; i >= 0; i--) {
            elementsToRemove[i].parentNode.removeChild(elementsToRemove[i]);
        }

        return tempBody.innerHTML;
    }

    function h(html) {
        // remove the head tab of code blocks
        const withoutDiv = removeClassFromHTML(html, "flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md");

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