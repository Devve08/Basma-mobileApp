import React from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback} from 'react-native'

export default function KeyboardAvoidingWrapper({children}) {
    return (
       <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
           <ScrollView>
               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
               </TouchableWithoutFeedback>
           </ScrollView>
       </KeyboardAvoidingView>
    )
}