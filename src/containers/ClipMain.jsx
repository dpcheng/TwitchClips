import React from "react"

class ClipMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slugs: []
        }
    }

    componentDidMount() {
        // const options = {
        //     width: document.body.offsetWidth,
        //     height: 700,
        //     channel: "jovian"
        // }

        // const player = new window.Twitch.Player("channel-main", options)
        // player.play()
    }

    handleTextChange = (e) => {
        const rawText = e.currentTarget.value
        const myRe = /(?:https:\/\/clips.twitch.tv\/)(\S+)/g
        var myArray;
        while ((myArray = myRe.exec(rawText)) !== null) {
            if (this.state.slugs.push) {
                const slugs = this.state.slugs
                slugs.push(myArray[1])
                if (typeof myArray[1] === "string") {
                    this.setState({ slugs })
                }
            }
        }
    }

    handleRandom = () => {
        var slugs = this.state.slugs

        var i = 0
            , j = 0
            , temp = null

        for (i = slugs.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = slugs[i]
            slugs[i] = slugs[j]
            slugs[j] = temp
        }

        this.setState({ slugs })
    }

    handleNext = () => {
        const slugs = this.state.slugs

        const currentSlug = slugs.shift()
        slugs.push(currentSlug)

        this.setState({ slugs })
    }

    render() {
        console.log(this.state.slugs)
        return (
            // <div
            //     id="channel-main"
            // />
            <div>
                {
                    this.state.slugs.length > 0 &&
                    <iframe
                        src={`https://clips.twitch.tv/embed?clip=${this.state.slugs[0]}`}
                        height={700}
                        width={document.body.offsetWidth}
                        scrolling={false}
                        allowfullscreen={true}
                        preload=""
                    />
                }
                <input
                    type="text"
                    onChange={this.handleTextChange}
                />
                <button
                    onClick={this.handleRandom}
                >
                    Randomize
                </button>
                <button
                    onClick={this.handleNext}
                >
                    Next
                </button>
            </div>
        )
    }
}

export default ClipMain