import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import Elvcards from './components/Elvcards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import Testcomp from './components/Testcomp'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      
      <Flatcards />
      <Elvcards />
      <FancyCards />
      <ContactList />
      <ActionCard />
      <Testcomp />
      

      </ScrollView>
    </SafeAreaView>
  )
}

export default App