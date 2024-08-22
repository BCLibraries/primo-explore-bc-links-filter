angular
    .module('bc-links-filter', [])
    app.value('linksToKeep', []).component('prmServiceLinksAfter', {
      bindings: {
        parentCtrl: '<'
      },
      controller: function controller($document, linksToKeep) {
        angular.element(function () {
          if (linksToKeep.length > 0) {
            var lNodes = $document[0].querySelectorAll("prm-service-links > div > div > div");
            for (var i = 0; i < lNodes.length; i++) {
              var eNode = lNodes[i];
              var span = eNode.querySelector("a > span");
              if (span != null) {
                if (!linksToKeep.includes(span.textContent.trim())) {
                  eNode.style.display = "none";
                }
              }
            }
          }
        });
      }
    });

/* 856 links to display in Links service */
app.value('linksToKeep', [
  "Request Article",
  "Report a problem",
  "Display Source Record",
  "Search for this record in WorldCat",
  "View this resource in Syndetics"
]);
