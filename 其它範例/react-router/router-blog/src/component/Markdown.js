import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// 這個元件是為了要將markdown格式的純文字檔案內容，轉變為React的JSX格式
const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
})

const options = {
  overrides: {
    h1: {
      component: props => <Typography gutterBottom variant="h4" {...props} />,
    },
    h2: {
      component: props => <Typography gutterBottom variant="h6" {...props} />,
    },
    h3: {
      component: props => (
        <Typography gutterBottom variant="subtitle1" {...props} />
      ),
    },
    h4: {
      component: props => (
        <Typography gutterBottom variant="caption" paragraph {...props} />
      ),
    },
    p: { component: props => <Typography paragraph {...props} /> },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
}

function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />
}

export default Markdown
