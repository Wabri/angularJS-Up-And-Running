// File: chapter3/controller.js
angular.module('notesApp', [])
	.controller('ListCtrl',[function(){
		var self = this;
		self.items = [
			{id:1, label: 'first', done:true},
			{id:2, label: 'second', done:false}
		];
		self.getDoneClass = function(item) {
			return {
				finished: item.done,
				unfinished: !item.done
			};
		};
	}]);
