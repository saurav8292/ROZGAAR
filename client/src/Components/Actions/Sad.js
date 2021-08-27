import MoodBadIcon from '@material-ui/icons/MoodBad';

const Sad = () => {
  return (
    <MoodBadIcon style={{
      flexGrow: '1', 
      marginTop: '10px', 
      postion: 'absolute', 
      width: '10vh',
      height: '10vh',
      verticalAlign: 'middle'
   }}/>
  )
}

export default Sad;