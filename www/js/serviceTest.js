/* Testing Our Services */
describe("Service Tests",function() {

beforeEach(module('starter',function($provide){

$provide.factory('Chats',function(){

var chats = ['1','2'];
	return {
		all: function() {
			return chats;
		}
	};
});

}));

describe("Testing Chat Services",function(){

var chatService;
/*beforeEach(inject(function(Chats){
chatService = Chats;
})); */

it('Chat Service all call',inject(function(Chats){
	chatService = Chats;
	var chats = chatService.all();
	expect(chats.length).toBe(2);
}));

});

/* Testing Our Controllers */

describe("Testing Chat Controllers",function(){

var scope,controller,$httpBackend;
/*beforeEach(inject(function(Chats){
chatService = Chats;
})); */


        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            scope = $rootScope.$new();
            ctrl = $controller('ChatsCtrl', {
                $scope: scope
            });
        }));


it('Chat Service all call',inject(function(){
	
	expect(scope.chats.length).toBe(2);
}));

});

it('Mock Test',function() {
var a = true;
expect(a).toBe(true);
});


});