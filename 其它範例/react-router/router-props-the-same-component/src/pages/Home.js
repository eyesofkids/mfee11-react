import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation'
import StarRateIcon from '@material-ui/icons/StarRate'

import DataTable from './DataTable'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
})

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queryString: this.props.queryString,
    }
  }

  // 套用時的處理方法
  handleOnApplyClick = () => {
    // 注意：因為是同一元件，只是網址改變的模擬，要使用這種方式才可以
    // history.push實際上是建立了一個新的網址記錄
    // 但對應用(元件)來說，其實是同一個應用(元件)
    this.props.history.push(this.props.queryString)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              遊戲卡片資料庫
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={8}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.props.handleStarButtonClick(1)}
            >
              <StarRateIcon className={classes.leftIcon} />
              一星
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.props.handleStarButtonClick(2)}
            >
              <StarRateIcon className={classes.leftIcon} />
              二星
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.props.handleStarButtonClick(3)}
            >
              <StarRateIcon className={classes.leftIcon} />
              三星
            </Button>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={8}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.props.handlePosButtonClick('前鋒')}
            >
              <TransferWithinAStationIcon className={classes.leftIcon} />
              前鋒
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.props.handlePosButtonClick('中鋒')}
            >
              <TransferWithinAStationIcon className={classes.leftIcon} />
              中鋒
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.props.handlePosButtonClick('後衛')}
            >
              <TransferWithinAStationIcon className={classes.leftIcon} />
              後衛
            </Button>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={8}>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              onClick={this.handleOnApplyClick}
            >
              <TransferWithinAStationIcon className={classes.leftIcon} />
              套用
            </Button>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={8}>
            <DataTable classes={{ ...classes }} />
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

// 注意withStyles高階元件樣式的使用
export default withStyles(styles)(Home)
