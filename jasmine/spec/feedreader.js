/* I referenced Matthew Cranford Walkthrough blog 
 * (https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/)
 * and Ryan Waite's Video Tutorial 
 * (https://www.youtube.com/watch?v=eUdkhVkpCf8&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&index=4)
 * alongside this project
 */
 
$(function() {
    /* First test suite */
    describe('RSS Feeds', function() {
        /* Test provided by Udacity */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test One: Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('urls are defined', function() {
            for(let urls of allFeeds){
                expect(urls.url).toBeDefined();
                expect(urls.url.length).not.toBe(0);
            }
         });

        /* Test Two: Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
            for(let names of allFeeds){
                expect(names.name).toBeDefined();
                expect(names.name.length).not.toBe(0);
            }
         });
    });


    /* Second test suite*/
    describe('The menu', function() {

        /* Test Three: Test that ensures the menu element is
         * hidden by default.
         */
         it('menu hidden by default', function() {
            const menu = document.querySelector('body');
            expect(menu.classList.contains('menu-hidden')).toBe(true);
         });

         /* Test Four: Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('menu visibility when clicked', function() {
            const menu = document.querySelector('body');
            const menuClick = document.querySelector('.menu-icon-link');

            menuClick.click();
            expect(menu.classList.contains('menu-hidden')).toBe(false);

            menuClick.click();
            expect(menu.classList.contains('menu-hidden')).toBe(true);
          });
      });   

    /* Third test suite */
    describe('Initial Entries', function() {

        /* Test Five: Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
                loadFeed(1, done);
            });

         it('loadFeed contains an entry', function(done) {
            const feed = document.querySelector('.feed');
            expect(feed.children.length).not.toBe(0);
            done();
         });
     });    

    /* Fourth test suite */
    describe('News Feed Selection', function() {

        /* Test Six: Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         let firstFeed, secondFeed;

         beforeEach(function(done){
                loadFeed(1, function() {
                    firstFeed = document.querySelector('div.feed').innerHTML;
                    loadFeed(2, function() {
                        secondFeed = document.querySelector('div.feed').innerHTML;
                        done();    
                    });
                });    
            });

         it('loadFeed contains new entry', function() {
            expect(firstFeed != secondFeed).toBe(true);
         });

     });
}());
