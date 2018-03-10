import React from "react"

class ClipMain extends React.Component {
    componentDidMount() {
        // const options = {
        //     width: document.body.offsetWidth,
        //     height: 700,
        //     channel: "jovian"
        // }

        // const player = new window.Twitch.Player("channel-main", options)
        // player.play()
    }

    render() {
        return (
            // <div
            //     id="channel-main"
            // />
            <iframe
                src="https://clips.twitch.tv/embed?clip=SpeedyCaringOcelotDansGame"
                height={700}
                width={document.body.offsetWidth}
                scrolling={false}
                allowfullscreen={true}
                preload=""
            />
        )
    }
}

export default ClipMain