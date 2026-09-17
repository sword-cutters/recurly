import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const signUn = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link href="/(auth)/signUp">Sign In</Link>
    </View>
  )
}

export default signUn