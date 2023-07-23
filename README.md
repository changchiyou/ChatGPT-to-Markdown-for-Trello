# ChatGPT-to-Markdown-for-Trello
Convert ChatGPT conversation text to Markdown for Trello.

It should be noted that Trello is sensitive to Markdown syntax. Sometimes, a minor variation in line breaks can cause display problems. 

This was particularly challenging since the existing Chrome Plugin for converting ChatGPT conversations into Markdown did not meet my requirements. Hence, I made the decision to develop my own solution.

> Despite the availability of the [built-in sharing conversation feature](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) in ChatGPT, there is still a need for selectively sharing specific fragments of conversations. As a result, this project will not be abandoned in the near future.


## Installation

1. Install [Tampermoneky](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) on your browser
2. Copy the script [chatgpt2markdown.js](/scripts/chatgpt2markdown.js)
   https://github.com/changchiyou/ChatGPT-to-Markdown-for-Trello/blob/3892a78244b298bc44e4be5c95800c7375beb185/scripts/chatgpt2markdown.js#L1-L96
3. Paste into Tampermonkey's editor, which can be opened by clicking the tampermonkey icon and select `Create a new script...` option.

## Usage

By clicking the `Markdown` button next to the `Regenerate response` button, the conversation would be convert to markdown syntax and storage in your clipboard.

You can test the feature with the ChatGPT conversation below:

- [ChatGPT-Random Code Demos](https://chat.openai.com/share/a06b46e1-f9f8-46fb-9deb-54ce4b75f78b)