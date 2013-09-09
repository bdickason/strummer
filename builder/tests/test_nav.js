describe('nav', function() {

  beforeEach(module('nav'));

  // We have to load the templates in advance, otherwise the browser tries to fetch them dynamically which causes tests to fail.
  // Reference: https://github.com/vojtajina/ng-directive-testing
  beforeEach(module('static/nav/menu.html', 'static/nav/pane.html'));

  describe('directive: menu', function() {
    var scope, html, element, compiled;
    beforeEach(function() {
      html = '<menu>' +
                '<pane title="CMS" symbol="#">' +
                  'Submenu stuff goes here' +
                '</pane>' +
              '</menu>';

      inject(function($compile, $rootScope) {
        scope = $rootScope;
        element = angular.element(html);
        compiled = $compile(element)(scope);
        scope.$digest();
      });
    });
    it('Should start with no panes selected', inject(function($controller, $rootScope) {
      var test = element.find('.active'); // We indicate an active pane by setting a class .active
      var result = {};

      expect(JSON.stringify(test)).toEqual(JSON.stringify(result));

      ctrl = $controller(menuController, {$scope: scope, $element: null});
      console.log(ctrl);
    }));
    it('Should select a single pane if no panes are selected', function() {
      expect('a').toEqual('a');
    });
    it('Should de-select the current pane if the current pane is selected', function() {

    });

    it('Should select the current pane and de-select the other pane if another pane is selected', function() {

    });

  });
});