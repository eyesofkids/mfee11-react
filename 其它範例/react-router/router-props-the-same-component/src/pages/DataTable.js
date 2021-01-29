import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { withRouter } from 'react-router-dom'

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

let id = 0
function createData(name, star, pos, type, rating) {
  id += 1
  return { id, name, star, pos, type, rating }
}

const rows = [
  createData('呂布', 3, '前鋒', '攻擊型', 10),
  createData('華佗', 1, '後衛', '支援型', 4),
  createData('華雄', 2, '前鋒', '攻擊型', 7),
  createData('劉備', 1, '中鋒', '輔助型', 4),
  createData('關公', 3, '前鋒', '攻擊型', 9),
  createData('關平', 2, '中鋒', '攻擊型', 8),
  createData('張郃', 2, '前鋒', '攻擊型', 7),
  createData('孫權', 1, '中鋒', '輔助型', 6),
  createData('陳登', 1, '後衛', '支援型', 2),
  createData('太史慈', 1, '前鋒', '支援型', 5),
]

const DataTable = props => {
  // 這是獲取網址上搜尋字串的語法
  // 因為用了withRouter(最下面)，所以可以得到目前搜尋字串的情況
  const urlParams = new URLSearchParams(props.location.search)

  // 注意搜尋字串是字串類型
  const star = urlParams.get('star')
  const pos = urlParams.get('pos')

  // 過濾出目前的符合的資料
  const filterRows = rows.filter(element => {
    if (star && element.star !== +star) return false
    if (pos && element.pos !== pos) return false
    return true
  })

  const { classes } = props

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>角色名稱</TableCell>
            <TableCell align="right">星數</TableCell>
            <TableCell align="right">站位</TableCell>
            <TableCell align="right">定位</TableCell>
            <TableCell align="right">評分</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterRows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.star}</TableCell>
                <TableCell align="right">{row.pos}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

// 注意withRouter的套用
// 通常函式型元件/子元件中要使用router的屬性或方法要使用
export default withStyles(styles)(withRouter(DataTable))
