import { createNativeStakeNavigator } from '@react-navigation/native-stake'

import Welcome from '../pages/welcome';
import Signin from '../pages/signin';

const stake = createNativeStakeNavigator();

export default function Routs() {
    return (
        <stake.Navigator>
            <stake.screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <stake.screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
            />
        </stake.Navigator>
    )
}