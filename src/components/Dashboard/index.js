import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// import { AnimateSharedLayout } from 'framer-motion'
import './style.css'

function Dashboard () {
  return (
    <motion.div  
    initial={{
      opacity: 0,
      x:100,
      y:100
    }}
    animate={{
      opacity: 1,
      x:0,
      y:0

    }} 
    transition={{
      duration:5
    }} className="UserDash">
      <h1>Dashboard</h1>
      <Link to="/createinvite"><button className="createInvite">Create an Invite</button></Link>
      <Link to="/viewinvite"><button className="viewInvite">View Invite</button></Link>
      <Link to="/itinerary"><button className="Itinerary">View Itinerary</button></Link>
      <Link to="/guestlist"><button className="guestList">Guest List</button></Link>

    </motion.div>
  );
}

// const [selectedId, setSelectedId] = useState(null)
// {items.map(item => (
//   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//     <motion.h5>{item.subtitle}</motion.h5>
//     <motion.h2>{item.title}</motion.h2>
//   </motion.div>
// ))}
// <AnimatePresence>
//   {selectedId && (
//     <motion.div layoutId={selectedId}>
//       <motion.h5>{item.subtitle}</motion.h5>
//       <motion.h2>{item.title}</motion.h2>
//       <motion.button onClick={() => setSelectedId(null)} />
//     </motion.div>
//   )}
// </AnimatePresence>

// function List({ items, selectedId }) {
//   return (
//     <AnimateSharedLayout>
//       <motion.ul layout>
//         {items.map(item => (
//           <Item content={item.content} />
//         ))}
//       </motion.ul>
//     </AnimateSharedLayout>
//   )
// }


export default Dashboard