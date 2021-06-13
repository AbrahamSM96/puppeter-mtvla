const scraperObject = {
    url: "https://miaw.mtvla.com/vota/amo-del-podcast",
    async scraper(browser) {
         const width = 1024;
         const height = 2000;
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        await page.setViewport({ width: width, height: height });
        page.setDefaultNavigationTimeout(900000000);
        await page.waitForSelector(".grouped-vote-item--active");
 const buttonCreativo = await page.$$(
     ".grouped-vote-item--active .grouped-vote-item__inner .element-wrapper .options .view-options .option button",
 );
       function bucleButton () {
          console.log('clickkkk')
          if (buttonCreativo[1]) return buttonCreativo[1].click();
       }

       for(let i = 1;  i <= 500; i++){
           ( function (ind) {
               setTimeout( async function () {
                   console.log(ind, 'inddd');
                   bucleButton();
                   if (ind % 20 === 0) {
                        setTimeout(async()=>{
                            const buttonFiveSeconds = await page.$$(
                                ".items .grouped_vote .grouped_vote__main .grouped_vote__middle .grouped_vote__footer .grouped_vote_end .grouped_vote__controls .grouped_vote__buttons .grouped_vote__button",
                            );
                            buttonFiveSeconds[0].evaluate((e) => e.click())
                        },500)
                   }
               }, 500 * ind);
           })(i);  
       }


    },
};

module.exports = scraperObject;
