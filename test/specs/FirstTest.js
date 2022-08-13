// describe('This is my first test in WEBDIO', () => {

//     it('My first test case , Verify URL', () => {

//         browser.url('https://webdriver.io/')
//         expect(browser).toHaveUrlContaining('sh')
//     });

//     it('Verify Title' , () => {

//          browser.url('https://the-internet.herokuapp.com/login')
//          expect(browser).toHaveTitle('The Internet')

//     });
    
// });

describe('Verify Login',  () => {

    it('THE INTERNET LOGIN' , async () => {

         browser.url('https://the-internet.herokuapp.com/login')
         await expect(browser).toHaveTitle('The Internet')

         const username = await $("//input[@id='username']")
         await username.setValue('tomsmith')


         const password = await $("//input[@id='password']")
         await password.setValue('SuperSecretPassword!')

         const loginClick = await $("//i[contains(text(),'Login')]")
         loginClick.click()


    });
    
});
