describe('This is my first test in WEBDIO', () => {

    it('My first test case , Verify URL', () => {

        browser.url('https://the-internet.herokuapp.com/login');
        console.log('Session id is: ',browser.sessionId);
        console.log('Capabilities: ',browser.capabilities);
        

        
    });
    
});
