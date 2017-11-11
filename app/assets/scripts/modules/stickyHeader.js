import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";
class StickyHeader {
    constructor() {
         this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriger = $(".large-hero__title");
        this.creatHeaderWaypoint();
        this.pageSection = $(".page-section");
        this.headerlink = $(".primary-nav a");
        this.creatPageSectionWaypoint();
        this.addSmoothScroling();
         this.refreshWayPoint();
    }

    refreshWayPoint() {
     this.lazyImages.on('load', function() {
          Waypoint.refreshAll();
      });
     }

    addSmoothScroling() {
        this.headerlink.smoothScroll();
    }
    creatHeaderWaypoint() {
        var that = this;
        new Waypoint({

            element: this.headerTriger[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }


        });
    }

    creatPageSectionWaypoint() {
        var that = this;
        this.pageSection.each(function() {
            var curruntIem = this;
            new Waypoint({
                element: curruntIem,
                handler: function(direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = curruntIem.getAttribute("data-matching-link");
                        that.headerlink.removeClass("is-curruntlink");
                        $(matchingHeaderLink).addClass("is-curruntlink");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: curruntIem,
                handler: function(direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = curruntIem.getAttribute("data-matching-link");
                        that.headerlink.removeClass("is-curruntlink");
                        $(matchingHeaderLink).addClass("is-curruntlink");
                    }
                },
                offset: "-40%"
            });
        });


    }
}


export default StickyHeader;