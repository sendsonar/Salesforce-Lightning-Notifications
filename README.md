# Salesforce-Lightning-Notifications
Lightning Notifications for Visual Force Pages and Lightning Out

lightning:notificationLibrary does not work for Visual Force Pages or
Lightning Out and so you can't use Toasts. You should use Toasts. Toasts are
really nice

This is an attempt to implement to implement lightning:notificationLibrary.
It is a work in progress.

## How to Use
I don't understand how Salesforce code sharing works. I'm not going to bother
submitting this thing to the app store right now. I guess you can just
copy/paste files into your project.

### "Installation"
In this current itteration you put `NotificationComponent` probably in your
root component with an `aura:id` attribute

```html
<c:NotificationComponent aura:id="notifLib"/>
```

### Show Toast
You'll need to `.find` your `NotificationComponent` and call `showToast` on it.

```javascript
component.find('notifLib').showToast({
  title: 'Configuration Saved Successfully.',
  variant: 'success',
})
```

I've impelemented the `title`, `message`, `variant`, and `mode` parameters
(hopefully correctly). I have not yet impelemented the `messageData` and
placeholder functionality.

### Show Notice
Haven't found a need to implement `showNotice` yet. Feel free to make a PR
if you would like to contribute.

## Future
In next few interations, if I get around to it, I'm imagining creating seperate
components for showing Toasts and Prompts that listen to Applcation level
"showToast" and "showNotice" events fired by `NotificationComponent`'s
`showToast` and `showNotice` methods. This way you just put your Toasts and
Prompts component in your root and put `NotificationComponent` wherever you
might want to call `showToast` or `showNotice`. Names will probably change
i.e `NotficationComponent` will be renamed to `notificationsLibrary`.

## Contributing
Feel free to make a PR. I should probably get some tests and linting together.
Be nice to each other. Thanks for checking this out.


## References
https://developer.salesforce.com/docs/component-library/bundle/force:showToast/documentation
https://developer.salesforce.com/docs/component-library/bundle/lightning:notificationsLibrary/documentation
https://www.lightningdesignsystem.com/components/toast/
https://www.lightningdesignsystem.com/components/prompt/
