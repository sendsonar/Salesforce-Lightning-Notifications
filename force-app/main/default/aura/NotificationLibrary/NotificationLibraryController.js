({
    showToast: function(component, event, helper) {
        var showToastEvent = $A.get("e.c:ShowToastEvent")
        showToastEvent.setParams(event.getParam('arguments')[0])
        showToastEvent.fire()
    }
})
