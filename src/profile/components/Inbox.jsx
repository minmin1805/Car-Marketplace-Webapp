import React, { useEffect, useState } from 'react'
import { SendBirdProvider, App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';


function Inbox() {

    const {user} =useUser();
    const [userId, setUserId] = useState();
    const [channel, setChannel] = useState();

    useEffect(() => {
        if(user) {
            const id=(user.primaryEmailAddress?.emailAddress).split('@')[0];
            setUserId(id);
        }
    },[user])

  return (
    <div>
    
        <div style={{ width:'100%', height:'500px' }}>
      {/* 
        This super smart component serves as a drop-in chat solution
        
        For advanced 🚀 customizations, use SendbirdProvider:
        https://sendbird.com/docs/chat/uikit/v3/react/essentials/sendbirdprovider
      */}

      <SendBirdProvider 
      appId={import.meta.env.VITE_SENDBIRD_APP_ID} 
      userId={userId} 
      nickname={user?.fullman} 
      profileUrl={user?.imageUrl}
      allowProfileEdit={true}>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
        <GroupChannelList onChannelSelect={(channel) => {
            setChannel(channel?.url);
        }}

        channelListQueryParams={
            {
                includeEmpty: true
            }
        }

        />

        </div>
        <div className='md:col-span-2'>
        <GroupChannel channelUrl={channel} />
        </div>
      </div>

      </SendBirdProvider>

      <SendbirdApp
        appId={import.meta.env.VITE_SENDBIRD_APP_ID}
        userId={'minmin'}
        accessToken={'ACCESS_TOKEN'} // Optional, but recommended
      />
    </div>

    </div>
  )
}

export default Inbox