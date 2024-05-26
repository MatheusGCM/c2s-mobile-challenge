export interface ModalVisibleStateProps {
  modalVisible: boolean
  closeModal(): void
}
export interface PageStateProps {
  page: number
  handleLoadMore(): void
}

export interface StudentDetailsStateProps {
  studentDetails: Student | null
  handleSelectedStudent(studentDetails: Student): void
}

export interface StudentsStateProps {
  students: Student[] | null
  isLoading: boolean
  fetchData(page: number): void
}

export interface FilterStateProps {
  search: string
  filterGender: 'male' | 'female' | null
  handleFilterGender(filterGender: 'male' | 'female'): void
  handleSearch(search: string): void
  handleCleanFilters(): void
}
