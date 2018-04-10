({
    doInit: function(cmp, evt, helper) {
        helper.initialize(cmp);
    },

    switchLanguage: function(cmp, evt, helper) {
        var language = evt.getParam("value");
        helper.switchLanguage(cmp, language);
    },
})