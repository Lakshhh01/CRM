import React from 'react'


const DropDownProfile = () => {
  return (
    <div className='flex flex-col dropDownProfile'>
			<ul className='flex flex-col gap-4'>
				<li ><a href="Profile">Profile</a></li>
				<li><a href="/">Logout</a></li>
			</ul>
		</div>
  )
}

export default DropDownProfile