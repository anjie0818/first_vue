import Mock from 'mockjs'
Mock.mock('api/getNewsList',{
  'list|5':[
    {
      url:'@url',
      title:'@ctitle(5,10)'
    }
  ]
})
Mock.mock('api/login',{
    username:'anjie'
})
Mock.mock('api/getAnalysisPrice',{price:765})
function getRImg () {
  return Mock.Random.image('700x300', Mock.Random.hex())
}
Mock.mock(/getSlides/, [
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 1,
    toKey: 'analysis'
  },
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 2,
    toKey: 'count'
  },
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 3,
    toKey: 'publish'
  },
  {
    src: getRImg (),
    title: '@ctitle(4, 12)',
    ky: 4,
    toKey: 'forecast'
  }
])
