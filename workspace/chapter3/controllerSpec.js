// File: chapter3/controllerSpec.js
describe('Controller: ListCtrl', function() {
  beforeEach(module('notesApp'));
  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('ListCtrl');
  }));

  it('should have items available on load', function() {
    expect(ctrl.items).toEqual([
      {id:1, label:'first', done:true},
      {id:2, label:'second', done:false}
    ]);
  });

  it('should have highlight items based on state', function() {
      var item = {id: 1, label: 'first', done: true};
      var actualClass = ctrl.getDoneClass(item);
      expect(actualClass.finisched).toBeTruthy();
      expect(actualClass.unfinished).toBeFalsy();
      item.done = false;
      actualClass = ctrl.getDoneClass(item);
      expect(actualClass.finished).toBeFalsy();
      expect(actualClass.unfinished).toBeTruthy();
  });
});
