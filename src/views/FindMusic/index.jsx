import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCardList, fetchSwiperImg } from './store/actionCreators'
import Tabs from '../../component/Tabs'
import MinorTitle from '../../component/MinorTitle'
import PlayList from './PlayList'
import Explore from './Explore'
import './style.styl'

const { TabPanel } = Tabs
@withRouter
@connect(
  state => ({
    findMusic: state.findMusic,
  }),
  {
    fetchCardList,
    fetchSwiperImg,
  },
)
export default class FindMusic extends React.Component {
  componentDidMount() {
    const { swiperImg, cardList } = this.props.findMusic

    if (!cardList.length && !swiperImg.length) {
      this.props.fetchCardList(30)
      this.props.fetchSwiperImg()
    }
  }
  render() {
    const { swiperImg, cardList } = this.props.findMusic
    return (
      <div className="find-music">
        <MinorTitle>发现音乐</MinorTitle>
        <Tabs defaultActiveIndex={1}>
          <TabPanel tab="个性推荐">
            <Explore data={swiperImg} />
          </TabPanel>
          <TabPanel tab="歌单">
            <PlayList data={cardList} />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
