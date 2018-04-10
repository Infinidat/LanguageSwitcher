({
    //get user local language
    initialize: function(cmp, setlang) {
        var action = cmp.get("c.setLanguage");
        action.setCallback(this, function(res){
            var state = res.getState();
            if (state === "SUCCESS") {
                var ret = res.getReturnValue();
                cmp.find("currentLanguage").getElement().innerHTML = ret;
            }
        });
        $A.enqueueAction(action);
    },

    switchLanguage: function(cmp, language) {
        var action = cmp.get("c.setLanguage");
        action.setParams({ "ref1": language });
        action.setCallback(this, function (res) {
            var state = res.getState();
            if (state === "SUCCESS") {
                window.location.reload();
            }
            else if (state == "ERROR") {
                alert(response.getError());
            }
        });
        $A.enqueueAction(action);
    },
})