({
    removeToast: function(component) {
        var id = component.get('v.id')
        event = component.getEvent('onRemoveToast')
        event.setParams({ id: id })
        event.fire()
    }
})
