import 'react-native-get-random-values'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Modal, View } from 'react-native'
import { v4 as uuidv4 } from 'uuid'

import { ModalContainer, ModalOutside } from './styles'

import {
  Card,
  ListHeaderComponent,
  StudentDetails,
  ListEmptyComponent,
} from '@/components'
import { useBoundStore } from '@/store/use-bound-store'
import { useFilterStore } from '@/store/use-filter-store'

export function Home() {
  const { search, filterGender } = useFilterStore()
  const {
    students,
    isLoading,
    studentDetails,
    modalVisible,
    page,
    handleSelectedStudent,
    closeModal,
    fetchData,
    handleLoadMore,
  } = useBoundStore()

  const hasSearch = !!search
  const hasFilterGender = filterGender

  const filteredGender = hasFilterGender
    ? students?.filter((item) => item.gender === filterGender)
    : students

  const filteredData = hasSearch
    ? filteredGender?.filter((item) =>
        item.name.first
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()),
      )
    : filteredGender

  useEffect(() => {
    fetchData(page)
  }, [page])

  return (
    <>
      <FlatList
        data={filteredData}
        keyExtractor={() => `${uuidv4()}`}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!isLoading ? <ListEmptyComponent /> : null}
        ListHeaderComponent={<ListHeaderComponent />}
        ListHeaderComponentStyle={{ flex: 1, marginBottom: 20, gap: 15 }}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        ListFooterComponent={
          !hasSearch ? <ActivityIndicator color="white" size="small" /> : null
        }
        ListFooterComponentStyle={{ marginTop: 20 }}
        onEndReached={!hasSearch ? handleLoadMore : null}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <Card
            picture={item.picture.large}
            name={`${item.name.first} ${item.name.last}`}
            birthdate={item.dob.date}
            gender={item.gender}
            onPress={() => handleSelectedStudent(item)}
          />
        )}
      />
      {studentDetails && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <ModalContainer>
            <ModalOutside onPress={closeModal} />
            <StudentDetails {...studentDetails} />
          </ModalContainer>
        </Modal>
      )}
    </>
  )
}
