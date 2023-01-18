import Wrapper from "../Wrapper/Wrapper"

import './infoViewer.css'

function InfoViewer() {
    return (
        // <Wrapper>
            <div id="info-content">
                <h2>INFO</h2>
                <p>
                    Click the icon to select a room.
                </p>
                <p>
                    Project created to showcase furniture by displaying them as they may be at home. I got the idea from seeing images on the IKEA website of vague suggestions of a bedroom and I thought it would be cool if that room actually existed for the user to experience. 
                </p>

                <h2>DEVELOPMENT</h2>
                <p>
                    As I was storing and deploying on github I had to keep each individual file below 100Mb. This was mostly no issue until I tried adding the rug model. The texture and vertex count made it 107Mb so I had to reduce it's detail until it was as we have. 
                </p>

                <p>
                    I also wanted the light from the window to afect the scene but threejs's emmissive material only 'glows' by lighting up the area around it, and has no directional capabilities. My solution to this was to bake the model's textures in blender containing the light data as a static image.
                </p>

                <p>
                    Again this was mostly without issue until trying to do the rug and duvet. If the user zooms in they will see the low res textures but from a distance/ viewed as a whole they are adequate. I used 512x512 as the resolution for the textures as I was concerned with size but seeing the final filesizes I will try 1024x1024 next time. 
                </p>

                <p>
                    Next, I'd like to fill the room with random junk to rally sell the realism and then add more rooms when i get the time. 
                </p>

                <p>
                    -- END --
                </p>

            </div>
        // </Wrapper>
    )
}

export default InfoViewer