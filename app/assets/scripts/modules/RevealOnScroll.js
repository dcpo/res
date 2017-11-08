import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offserPer = offset;
        this.hideInit();
        this.createWaypoints();

    }

    hideInit() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var curruntItem = this; //set this to itemToReveal for waypoint 
            new Waypoint({
                element: curruntItem, //dom element to look when scroling
                handler: function() { //what to do when it scrol to this element

                    $(curruntItem).addClass("reveal-item--is-visible");
                },
                offset: that.offserPer //set offset
            });
        });
    }
}

export default RevealOnScroll;