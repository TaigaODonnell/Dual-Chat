
document.addEventListener('DOMContentLoaded', async () => {
    // Get the current tab's channel name
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = new URL(tab.url);

    let currentChannel = '';
    if (url.hostname === 'www.twitch.tv') {
        currentChannel = url.pathname.split('/')[1];
        document.getElementById('open-chat').addEventListener('click', () => {
            const formChannelName = document.getElementById('channel-name').value;
        if(formChannelName === '' || formChannelName === currentChannel) {
            console.log('Channel name is empty or the same as the current channel');
            return;
        }

        const chatUrl = `https://www.twitch.tv/${formChannelName}/chat`;
        chrome.windows.create({
            url: chatUrl,
            type: 'popup',
            width: 255,
            height: 870,
            left: 0,
            top: 280,
            focused: true
        });

        
        //sadge cant embbed on twitch :(
    //     const iframe = document.createElement('iframe');
    //     iframe.src = 'https://www.twitch.tv/embed/${formChannelName}/chat?parent=twitch.tv';
    //     iframe.width = '350px';
    //     iframe.height = '600px';
    //     iframe.style.position = 'fixed';
    //     iframe.style.top = '0';
    //     iframe.style.left = '0';
    //     document.body.appendChild(iframe);
    });
    }
});

