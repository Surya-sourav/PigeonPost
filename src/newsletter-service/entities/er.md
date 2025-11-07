// The Entity Relationship for the current entities : 

1. Author Entity ( One Author Can have Many Newsletters & Many Subscribers)

2. Newsletter Entity ( Many to One Relationship , so that many Newsletters can be of one Author Only)

3. Subscriber Entity ( Many to One Relationship ) , where the subscriber can subscribe to many authors right ! 

4. There are more things to the picture now , We are making the Subscriptions Table that is common to Subscribers & Authors that would store these two for tracking the Subscribers that have subscribed to the Author !
A Subscriber can have multiple Subscriptions of Author ! 