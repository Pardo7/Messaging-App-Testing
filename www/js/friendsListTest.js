describe('Friends Unit Tests', function(){
    var Friends;
    beforeEach(module('starter.services'));

    beforeEach(inject(function (_Friends_) {
        Friends = _Friends_;
    }));

    it('can get an instance of my factory', inject(function(Friends) {
        expect(Friends).toBeDefined();
    }));

    it('has 5 chats', inject(function(Friends) {
        expect(Friends.all().length).toEqual(5);
    }));


    it('has Ben logged in as a friend with an id of 0', inject(function(Friends) {
        var firstFriend = {
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'you are on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        };

        expect(Friends.get(0).name).toEqual(firstFriend.name);
    }));


    it('has Max logged in as friend with an id 1', inject(function(Friends) {
        var oneFriend = {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&amp;s=460'
        };

        expect(Friends.get(1).name).toEqual(oneFriend.name);
    }));

    it('has Andrew logged in as a friend with an id of 2', inject(function(Friends) {
        var secondFriend = {
            id: 2,
            name: 'Andrew Jostlin',
            lastText: 'Did you get the ice cream?',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        };

        expect(Friends.get(2).name).toEqual(secondFriend.name);
    }));
});