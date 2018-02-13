const webdesignArr = ['design1','design2','design3'];
const codingArr = ['coding1','coding2','coding3'];
const deviceArr = ['device1','device2','device3'];
const globalArr = ['global1','global2','global3'];
const json = [
  webdesign: {
    icon: 'fa fa-server',
    title: 'Web Design',
    arr: ['design1','design2','design3']
  },
  coding: {
    icon: 'fa fa-code',
    title: 'Coding',
    arr: ['coding1','coding2','coding3']
  },
  device: {
    icon: 'fa fa-mobile',
    title: 'Devices',
    arr: ['device1','device2','device3']
  },
  global: {
    icon: 'fa fa-globe',
    title: 'Global',
    arr: ['global1','global2','global3']
  }
]

const addItem = (Arr,$Obj) => {
  Arr.forEach(item=>{
    $Obj.append($('<li>').text(item))
  })
}

addItem(webdesignArr, $('.webdesign'))

$('.accordion>div .title').on('click', e=>{
  if ($(e.target).parent().hasClass('active')) {
    $(e.target)
    .parent()
    .removeClass('active')
    .find('.title')
    .siblings()
    .remove()
  } else {
    $(e.target).parent().addClass('active')
    addItem(webdesignArr, $(e.target).parent())
  }
})
