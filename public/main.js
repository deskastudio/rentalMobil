var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#list-example'
  })

  var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})

var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance

var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance