import { useState } from 'react';

export default function ProgramSelector() {
  const [selected, setSelected] = useState('');
  const [copied, setCopied] = useState(false);

  const programs = {
    '1. Smallest missing positive integer in sorted array': `#include <stdio.h>

int findsmall(int arr[], int size)
{
    int expected = 1;

    for(int i = 0; i < size; i++)
    {
        if(arr[i] == expected)
        {
            expected++;
        }
    }
    return expected;
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 7, 8};   // FIXED
    int size = sizeof(arr) / sizeof(arr[0]);

    int missing = findsmall(arr, size);
    printf("Smallest missing positive integer : %d", missing);

    return 0;
}
`,
    '2. Count occurrences of each word in text': `#include <stdio.h>
#include <string.h>

int main() {

    int n;
    char words[100][50];   // input words
    
    char unique[100][50];  // unique words
    int count[100] = {0};
    int u = 0;             // number of unique words

    printf("Enter number of words: ");
    scanf("%d", &n);

    printf("Enter the words:\n");
    for (int i = 0; i < n; i++) {
        scanf("%s", words[i]);
    }

    // count occurrences
    for (int i=0;i<n;i++) {
        int found = 0;

        for (int j=0;j<u;j++) {
            if (strcmp(words[i],unique[j]) == 0) {
                count[j]++;
                found = 1;
                break;
            }
        }

        if (!found) {
                strcpy(unique[u],words[i]);
                count[u] = 1;
                u++;
        }
    }

    // output
    printf("\nWord Occurrences:\n");
    for (int i = 0; i < u; i++) {
        printf("%s : %d\n", unique[i], count[i]);
    }

}`,
    '3. Index of target word - Binary & Linear search': `// Binary Search
#include <stdio.h>
int binarySearch(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int m = (l + r) / 2;
        if (arr[m] == target) return m;
        if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

// Linear Search
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++)
        if (arr[i] == target) return i;
    return -1;
}

int main() {
    int sorted[] = {1, 3, 5, 7, 9};
    int unsorted[] = {5, 2, 8, 1, 9};
    printf("Binary: %d\\n", binarySearch(sorted, 5, 7));
    printf("Linear: %d\\n", linearSearch(unsorted, 5, 8));
    return 0;
}`,
    '4. Sort student records - Bubble, Selection & Insertion': `#include <stdio.h>
#include <string.h>

struct Student {
    char name[30];
    int rollNo;
    int age;
};

/* Function to display records */
void display(struct Student s[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("Name: %s | RollNo: %d | Age: %d\n",
               s[i].name, s[i].rollNo, s[i].age);
    }
    printf("\n");
}

/* Bubble Sort by RollNo */
void bubbleSort(struct Student s[], int n) {
    int i, j;
    struct Student temp;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (s[j].rollNo > s[j + 1].rollNo) {
                temp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = temp;
            }
        }
    }
}

/* Selection Sort by RollNo */
void selectionSort(struct Student s[], int n) {
    int i, j, min;
    struct Student temp;

    for (i = 0; i < n - 1; i++) {
        min = i;
        for (j = i + 1; j < n; j++) {
            if (s[j].rollNo < s[min].rollNo) {
                min = j;
            }
        }
        temp = s[i];
        s[i] = s[min];
        s[min] = temp;
    }
}

/* Insertion Sort by RollNo */
void insertionSort(struct Student s[], int n) {
    int i, j;
    struct Student key;

    for (i = 1; i < n; i++) {
        key = s[i];
        j = i - 1;

        while (j >= 0 && s[j].rollNo > key.rollNo) {
            s[j + 1] = s[j];
            j--;
        }
        s[j + 1] = key;
    }
}

int main() {
    int n = 3;

    struct Student students[3] = {
        {"Rahul", 3, 20},
        {"Amit", 1, 21},
        {"Neha", 2, 19}
    };

    printf("Original Records:\n");
    display(students, n);

    bubbleSort(students, n);
    printf("After Bubble Sort (by RollNo):\n");
    display(students, n);

    selectionSort(students, n);
    printf("After Selection Sort (by RollNo):\n");
    display(students, n);

    insertionSort(students, n);
    printf("After Insertion Sort (by RollNo):\n");
    display(students, n);

    return 0;
}
`,
    '5. Sort integers descending with early termination': `#include <stdio.h>

#define SIZE 50

/* Function to check if array is already sorted in descending order */
int isDescending(int a[], int n) {
    int i;
    for (i = 0; i < n - 1; i++) {
        if (a[i] < a[i + 1]) {
            return 0;   // not descending
        }
    }
    return 1;   // already descending
}

/* Display array */
void display(int a[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");
}

/* Bubble Sort (Descending) */
void bubbleSort(int a[], int n) {
    int i, j, temp;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (a[j] < a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}

/* Selection Sort (Descending) */
void selectionSort(int a[], int n) {
    int i, j, max, temp;

    for (i = 0; i < n - 1; i++) {
        max = i;
        for (j = i + 1; j < n; j++) {
            if (a[j] > a[max]) {
                max = j;
            }
        }
        temp = a[i];
        a[i] = a[max];
        a[max] = temp;
    }
}

/* Insertion Sort (Descending) */
void insertionSort(int a[], int n) {
    int i, j, key;

    for (i = 1; i < n; i++) {
        key = a[i];
        j = i - 1;

        while (j >= 0 && a[j] < key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
}

int main() {
    int a[SIZE], i;

    printf("Enter 50 elements:\n");
    for (i = 0; i < SIZE; i++) {
        scanf("%d", &a[i]);
    }

    /* Early termination check */
    if (isDescending(a, SIZE)) {
        printf("\nArray is already sorted in descending order.\n");
        display(a, SIZE);
        return 0;
    }

    /* Apply sorting */
    bubbleSort(a, SIZE);
    printf("\nAfter Bubble Sort (Descending):\n");
    display(a, SIZE);

    selectionSort(a, SIZE);
    printf("\nAfter Selection Sort (Descending):\n");
    display(a, SIZE);

    insertionSort(a, SIZE);
    printf("\nAfter Insertion Sort (Descending):\n");
    display(a, SIZE);

    return 0;
}

`,
    '6. Merge Sort & Quick Sort with comparison count': `#include <stdio.h>

int mergeComp = 0, quickComp = 0;

/* Display array */
void display(int a[], int n) {
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
    printf("\n");
}

/* ---------- MERGE SORT ---------- */

void merge(int a[], int low, int mid, int high) {
    int i = low, j = mid + 1, k = 0;
    int temp[50];

    while (i <= mid && j <= high) {
        mergeComp++;
        if (a[i] <= a[j])
            temp[k++] = a[i++];
        else
            temp[k++] = a[j++];
    }

    while (i <= mid)
        temp[k++] = a[i++];

    while (j <= high)
        temp[k++] = a[j++];

    for (i = low, k = 0; i <= high; i++, k++)
        a[i] = temp[k];
}

void mergeSort(int a[], int low, int high) {
    if (low < high) {
        int mid = (low + high) / 2;
        mergeSort(a, low, mid);
        mergeSort(a, mid + 1, high);
        merge(a, low, mid, high);
    }
}

/* ---------- QUICK SORT ---------- */

int partition(int a[], int low, int high) {
    int pivot = a[high];
    int i = low - 1, j, temp;

    for (j = low; j < high; j++) {
        quickComp++;
        if (a[j] <= pivot) {
            i++;
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

    temp = a[i + 1];
    a[i + 1] = a[high];
    a[high] = temp;

    return i + 1;
}

void quickSort(int a[], int low, int high) {
    if (low < high) {
        int p = partition(a, low, high);
        quickSort(a, low, p - 1);
        quickSort(a, p + 1, high);
    }
}

int main() {
    int n, i;
    int a[50], b[50];

    printf("Enter size of array (max 50): ");
    scanf("%d", &n);

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
        b[i] = a[i];   // copy for quick sort
    }

    /* Merge Sort */
    mergeSort(a, 0, n - 1);
    printf("\nArray after Merge Sort:\n");
    display(a, n);
    printf("Number of comparisons in Merge Sort: %d\n", mergeComp);

    /* Quick Sort */
    quickSort(b, 0, n - 1);
    printf("\nArray after Quick Sort:\n");
    display(b, n);
    printf("Number of comparisons in Quick Sort: %d\n", quickComp);

    return 0;
}
`,
    '7. Singly linked list - Student details': `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student {
    int roll;
    char name[30];
    int age;
    struct Student *next;
};

struct Student *head = NULL;

/* Create new node */
struct Student* createNode() {
    struct Student *newNode;
    newNode = (struct Student*)malloc(sizeof(struct Student));

    printf("Enter Roll No: ");
    scanf("%d", &newNode->roll);
    printf("Enter Name: ");
    scanf("%s", newNode->name);
    printf("Enter Age: ");
    scanf("%d", &newNode->age);

    newNode->next = NULL;
    return newNode;
}

/* Display list */
void display() {
    struct Student *temp = head;
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    while (temp != NULL) {
        printf("Roll: %d | Name: %s | Age: %d\n",
               temp->roll, temp->name, temp->age);
        temp = temp->next;
    }
}

/* Insert at any position */
void insertAtPosition() {
    int pos, i = 1;
    struct Student *newNode = createNode();

    if (pos == 1 || head == NULL) {
        newNode->next = head;
        head = newNode;
        return;
    }

    printf("Enter position: ");
    scanf("%d", &pos);

    struct Student *temp = head;
    while (i < pos - 1 && temp->next != NULL) {
        temp = temp->next;
        i++;
    }

    newNode->next = temp->next;
    temp->next = newNode;
}

/* Delete a node by roll number */
void deleteNode() {
    int roll;
    struct Student *temp = head, *prev = NULL;

    printf("Enter Roll No to delete: ");
    scanf("%d", &roll);

    if (head != NULL && head->roll == roll) {
        head = head->next;
        free(temp);
        return;
    }

    while (temp != NULL && temp->roll != roll) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Record not found\n");
        return;
    }

    prev->next = temp->next;
    free(temp);
}

/* Search a node */
void searchNode() {
    int roll;
    struct Student *temp = head;

    printf("Enter Roll No to search: ");
    scanf("%d", &roll);

    while (temp != NULL) {
        if (temp->roll == roll) {
            printf("Found -> Roll: %d | Name: %s | Age: %d\n",
                   temp->roll, temp->name, temp->age);
            return;
        }
        temp = temp->next;
    }
    printf("Student not found\n");
}

/* Reverse linked list */
void reverseList() {
    struct Student *prev = NULL, *curr = head, *next;

    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
}

/* Modify Roll No */
void modifyRoll() {
    int oldRoll, newRoll;
    struct Student *temp = head;

    printf("Enter old Roll No: ");
    scanf("%d", &oldRoll);
    printf("Enter new Roll No: ");
    scanf("%d", &newRoll);

    while (temp != NULL) {
        if (temp->roll == oldRoll) {
            temp->roll = newRoll;
            printf("Roll number updated successfully\n");
            return;
        }
        temp = temp->next;
    }
    printf("Student not found\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Insert Node\n");
        printf("2. Delete Node\n");
        printf("3. Search Node\n");
        printf("4. Reverse List\n");
        printf("5. Modify Roll No\n");
        printf("6. Display List\n");
        printf("7. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1: insertAtPosition(); break;
        case 2: deleteNode(); break;
        case 3: searchNode(); break;
        case 4: reverseList(); break;
        case 5: modifyRoll(); break;
        case 6: display(); break;
        case 7: exit(0);
        default: printf("Invalid choice\n");
        }
    }
    return 0;
}
`,
    '8. Singly linked list - Employee PAN': `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct PAN {
    char pan[15];
    struct PAN *next;
};

struct PAN *head = NULL;

/* Create new node */
struct PAN* createNode() {
    struct PAN *newNode;
    newNode = (struct PAN*)malloc(sizeof(struct PAN));

    printf("Enter PAN Number: ");
    scanf("%s", newNode->pan);

    newNode->next = NULL;
    return newNode;
}

/* Display list */
void display() {
    struct PAN *temp = head;
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    while (temp != NULL) {
        printf("PAN: %s\n", temp->pan);
        temp = temp->next;
    }
}

/* Insert at any position */
void insertAtPosition() {
    int pos, i = 1;
    struct PAN *newNode = createNode();

    printf("Enter position: ");
    scanf("%d", &pos);

    if (pos == 1 || head == NULL) {
        newNode->next = head;
        head = newNode;
        return;
    }

    struct PAN *temp = head;
    while (i < pos - 1 && temp->next != NULL) {
        temp = temp->next;
        i++;
    }

    newNode->next = temp->next;
    temp->next = newNode;
}

/* Delete a node */
void deleteNode() {
    char pan[15];
    struct PAN *temp = head, *prev = NULL;

    printf("Enter PAN to delete: ");
    scanf("%s", pan);

    if (head != NULL && strcmp(head->pan, pan) == 0) {
        head = head->next;
        free(temp);
        return;
    }

    while (temp != NULL && strcmp(temp->pan, pan) != 0) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("PAN not found\n");
        return;
    }

    prev->next = temp->next;
    free(temp);
}

/* Search a node */
void searchNode() {
    char pan[15];
    struct PAN *temp = head;

    printf("Enter PAN to search: ");
    scanf("%s", pan);

    while (temp != NULL) {
        if (strcmp(temp->pan, pan) == 0) {
            printf("PAN found: %s\n", temp->pan);
            return;
        }
        temp = temp->next;
    }
    printf("PAN not found\n");
}

/* Reverse linked list */
void reverseList() {
    struct PAN *prev = NULL, *curr = head, *next;

    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
}

/* Modify PAN */
void modifyPAN() {
    char oldPAN[15], newPAN[15];
    struct PAN *temp = head;

    printf("Enter old PAN: ");
    scanf("%s", oldPAN);
    printf("Enter new PAN: ");
    scanf("%s", newPAN);

    while (temp != NULL) {
        if (strcmp(temp->pan, oldPAN) == 0) {
            strcpy(temp->pan, newPAN);
            printf("PAN updated successfully\n");
            return;
        }
        temp = temp->next;
    }
    printf("PAN not found\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Insert PAN\n");
        printf("2. Delete PAN\n");
        printf("3. Search PAN\n");
        printf("4. Reverse List\n");
        printf("5. Modify PAN\n");
        printf("6. Display List\n");
        printf("7. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1: insertAtPosition(); break;
        case 2: deleteNode(); break;
        case 3: searchNode(); break;
        case 4: reverseList(); break;
        case 5: modifyPAN(); break;
        case 6: display(); break;
        case 7: exit(0);
        default: printf("Invalid choice\n");
        }
    }
    return 0;
}
`,
    '9. Singly linked list - Employee Aadhar': `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Aadhar {
    char aadhar[20];
    struct Aadhar *next;
};

struct Aadhar *head = NULL;

/* Create new node */
struct Aadhar* createNode() {
    struct Aadhar *newNode;

    newNode = (struct Aadhar*)malloc(sizeof(struct Aadhar));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        return NULL;
    }

    printf("Enter Aadhar Number: ");
    scanf("%s", newNode->aadhar);

    newNode->next = NULL;
    return newNode;
}

/* Display list */
void display() {
    struct Aadhar *temp = head;

    if (head == NULL) {
        printf("List is empty\n");
        return;
    }

    while (temp != NULL) {
        printf("Aadhar: %s\n", temp->aadhar);
        temp = temp->next;
    }
}

/* Insert at any position */
void insertAtPosition() {
    int pos, i = 1;
    struct Aadhar *newNode = createNode();

    if (newNode == NULL)
        return;

    printf("Enter position: ");
    scanf("%d", &pos);

    if (pos == 1 || head == NULL) {
        newNode->next = head;
        head = newNode;
        return;
    }

    struct Aadhar *temp = head;
    while (i < pos - 1 && temp->next != NULL) {
        temp = temp->next;
        i++;
    }

    newNode->next = temp->next;
    temp->next = newNode;
}

/* Delete a node */
void deleteNode() {
    char aadhar[20];
    struct Aadhar *temp = head, *prev = NULL;

    if (head == NULL) {
        printf("List is empty\n");
        return;
    }

    printf("Enter Aadhar to delete: ");
    scanf("%s", aadhar);

    if (strcmp(head->aadhar, aadhar) == 0) {
        head = head->next;
        free(temp);
        printf("Aadhar deleted successfully\n");
        return;
    }

    while (temp != NULL && strcmp(temp->aadhar, aadhar) != 0) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Aadhar not found\n");
        return;
    }

    prev->next = temp->next;
    free(temp);
    printf("Aadhar deleted successfully\n");
}

/* Search a node */
void searchNode() {
    char aadhar[20];
    struct Aadhar *temp = head;

    printf("Enter Aadhar to search: ");
    scanf("%s", aadhar);

    while (temp != NULL) {
        if (strcmp(temp->aadhar, aadhar) == 0) {
            printf("Aadhar found: %s\n", temp->aadhar);
            return;
        }
        temp = temp->next;
    }

    printf("Aadhar not found\n");
}

/* Reverse linked list */
void reverseList() {
    struct Aadhar *prev = NULL, *curr = head, *next = NULL;

    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    head = prev;
    printf("List reversed successfully\n");
}

/* Modify Aadhar number */
void modifyAadhar() {
    char oldAadhar[20], newAadhar[20];
    struct Aadhar *temp = head;

    printf("Enter old Aadhar: ");
    scanf("%s", oldAadhar);

    printf("Enter new Aadhar: ");
    scanf("%s", newAadhar);

    while (temp != NULL) {
        if (strcmp(temp->aadhar, oldAadhar) == 0) {
            strcpy(temp->aadhar, newAadhar);
            printf("Aadhar updated successfully\n");
            return;
        }
        temp = temp->next;
    }

    printf("Aadhar not found\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Insert Aadhar\n");
        printf("2. Delete Aadhar\n");
        printf("3. Search Aadhar\n");
        printf("4. Reverse List\n");
        printf("5. Modify Aadhar\n");
        printf("6. Display List\n");
        printf("7. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: insertAtPosition(); break;
            case 2: deleteNode(); break;
            case 3: searchNode(); break;
            case 4: reverseList(); break;
            case 5: modifyAadhar(); break;
            case 6: display(); break;
            case 7: exit(0);
            default: printf("Invalid choice\n");
        }
    }

    return 0;
}
`,
    '10. Doubly linked list - Student details': `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student {
    int roll;
    char name[30];
    int age;
    struct Student *prev;
    struct Student *next;
};

struct Student *head = NULL;

/* Create new node */
struct Student* createNode() {
    struct Student *newNode;
    newNode = (struct Student*)malloc(sizeof(struct Student));

    printf("Enter Roll No: ");
    scanf("%d", &newNode->roll);
    printf("Enter Name: ");
    scanf("%s", newNode->name);
    printf("Enter Age: ");
    scanf("%d", &newNode->age);

    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}

/* Display list */
void display() {
    struct Student *temp = head;
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    while (temp != NULL) {
        printf("Roll: %d | Name: %s | Age: %d\n",
               temp->roll, temp->name, temp->age);
        temp = temp->next;
    }
}

/* Insert at any position */
void insertAtPosition() {
    int pos, i = 1;
    struct Student *newNode = createNode();

    printf("Enter position: ");
    scanf("%d", &pos);

    if (pos == 1 || head == NULL) {
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;
        head = newNode;
        return;
    }

    struct Student *temp = head;
    while (i < pos - 1 && temp->next != NULL) {
        temp = temp->next;
        i++;
    }

    newNode->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
    newNode->prev = temp;
}

/* Delete a node by roll number */
void deleteNode() {
    int roll;
    struct Student *temp = head;

    printf("Enter Roll No to delete: ");
    scanf("%d", &roll);

    while (temp != NULL && temp->roll != roll) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Record not found\n");
        return;
    }

    if (temp->prev != NULL)
        temp->prev->next = temp->next;
    else
        head = temp->next;

    if (temp->next != NULL)
        temp->next->prev = temp->prev;

    free(temp);
}

/* Search a node */
void searchNode() {
    int roll;
    struct Student *temp = head;

    printf("Enter Roll No to search: ");
    scanf("%d", &roll);

    while (temp != NULL) {
        if (temp->roll == roll) {
            printf("Found -> Roll: %d | Name: %s | Age: %d\n",
                   temp->roll, temp->name, temp->age);
            return;
        }
        temp = temp->next;
    }
    printf("Student not found\n");
}

/* Modify Roll No */
void modifyRoll() {
    int oldRoll, newRoll;
    struct Student *temp = head;

    printf("Enter old Roll No: ");
    scanf("%d", &oldRoll);
    printf("Enter new Roll No: ");
    scanf("%d", &newRoll);

    while (temp != NULL) {
        if (temp->roll == oldRoll) {
            temp->roll = newRoll;
            printf("Roll number updated successfully\n");
            return;
        }
        temp = temp->next;
    }
    printf("Student not found\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Insert Node\n");
        printf("2. Delete Node\n");
        printf("3. Search Node\n");
        printf("4. Modify Roll No\n");
        printf("5. Display List\n");
        printf("6. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1: insertAtPosition(); break;
        case 2: deleteNode(); break;
        case 3: searchNode(); break;
        case 4: modifyRoll(); break;
        case 5: display(); break;
        case 6: exit(0);
        default: printf("Invalid choice\n");
        }
    }
    return 0;
}
`,
    '11. Doubly linked list - Employee PAN': `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct PAN {
    char pan[15];
    struct PAN *prev;
    struct PAN *next;
};

struct PAN *head = NULL;

/* Create new node */
struct PAN* createNode() {
    struct PAN *newNode;
    newNode = (struct PAN*)malloc(sizeof(struct PAN));

    printf("Enter PAN Number: ");
    scanf("%s", newNode->pan);

    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}

/* Display list */
void display() {
    struct PAN *temp = head;
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    while (temp != NULL) {
        printf("PAN: %s\n", temp->pan);
        temp = temp->next;
    }
}

/* Insert at any position */
void insertAtPosition() {
    int pos, i = 1;
    struct PAN *newNode = createNode();

    printf("Enter position: ");
    scanf("%d", &pos);

    if (pos == 1 || head == NULL) {
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;
        head = newNode;
        return;
    }

    struct PAN *temp = head;
    while (i < pos - 1 && temp->next != NULL) {
        temp = temp->next;
        i++;
    }

    newNode->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
    newNode->prev = temp;
}

/* Delete a node */
void deleteNode() {
    char pan[15];
    struct PAN *temp = head;

    printf("Enter PAN to delete: ");
    scanf("%s", pan);

    while (temp != NULL && strcmp(temp->pan, pan) != 0) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("PAN not found\n");
        return;
    }

    if (temp->prev != NULL)
        temp->prev->next = temp->next;
    else
        head = temp->next;

    if (temp->next != NULL)
        temp->next->prev = temp->prev;

    free(temp);
}

/* Search a node */
void searchNode() {
    char pan[15];
    struct PAN *temp = head;

    printf("Enter PAN to search: ");
    scanf("%s", pan);

    while (temp != NULL) {
        if (strcmp(temp->pan, pan) == 0) {
            printf("PAN found: %s\n", temp->pan);
            return;
        }
        temp = temp->next;
    }
    printf("PAN not found\n");
}

/* Modify PAN number */
void modifyPAN() {
    char oldPAN[15], newPAN[15];
    struct PAN *temp = head;

    printf("Enter old PAN: ");
    scanf("%s", oldPAN);
    printf("Enter new PAN: ");
    scanf("%s", newPAN);

    while (temp != NULL) {
        if (strcmp(temp->pan, oldPAN) == 0) {
            strcpy(temp->pan, newPAN);
            printf("PAN updated successfully\n");
            return;
        }
        temp = temp->next;
    }
    printf("PAN not found\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Insert PAN\n");
        printf("2. Delete PAN\n");
        printf("3. Search PAN\n");
        printf("4. Modify PAN\n");
        printf("5. Display List\n");
        printf("6. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1: insertAtPosition(); break;
        case 2: deleteNode(); break;
        case 3: searchNode(); break;
        case 4: modifyPAN(); break;
        case 5: display(); break;
        case 6: exit(0);
        default: printf("Invalid choice\n");
        }
    }
    return 0;
}
`,
    '12. Doubly linked list - Employee Aadhar': `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Aadhar {
    char aadhar[20];
    struct Aadhar *prev;
    struct Aadhar *next;
};

struct Aadhar *head = NULL;

/* Create new node */
struct Aadhar* createNode() {
    struct Aadhar *newNode;
    newNode = (struct Aadhar*)malloc(sizeof(struct Aadhar));

    printf("Enter Aadhar Number: ");
    scanf("%s", newNode->aadhar);

    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}

/* Display list */
void display() {
    struct Aadhar *temp = head;
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    while (temp != NULL) {
        printf("Aadhar: %s\n", temp->aadhar);
        temp = temp->next;
    }
}

/* Insert at any position */
void insertAtPosition() {
    int pos, i = 1;
    struct Aadhar *newNode = createNode();

    printf("Enter position: ");
    scanf("%d", &pos);

    if (pos == 1 || head == NULL) {
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;
        head = newNode;
        return;
    }

    struct Aadhar *temp = head;
    while (i < pos - 1 && temp->next != NULL) {
        temp = temp->next;
        i++;
    }

    newNode->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
    newNode->prev = temp;
}

/* Delete a node */
void deleteNode() {
    char aadhar[20];
    struct Aadhar *temp = head;

    printf("Enter Aadhar to delete: ");
    scanf("%s", aadhar);

    while (temp != NULL && strcmp(temp->aadhar, aadhar) != 0) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Aadhar not found\n");
        return;
    }

    if (temp->prev != NULL)
        temp->prev->next = temp->next;
    else
        head = temp->next;

    if (temp->next != NULL)
        temp->next->prev = temp->prev;

    free(temp);
}

/* Search a node */
void searchNode() {
    char aadhar[20];
    struct Aadhar *temp = head;

    printf("Enter Aadhar to search: ");
    scanf("%s", aadhar);

    while (temp != NULL) {
        if (strcmp(temp->aadhar, aadhar) == 0) {
            printf("Aadhar found: %s\n", temp->aadhar);
            return;
        }
        temp = temp->next;
    }
    printf("Aadhar not found\n");
}

/* Modify Aadhar number */
void modifyAadhar() {
    char oldAadhar[20], newAadhar[20];
    struct Aadhar *temp = head;

    printf("Enter old Aadhar: ");
    scanf("%s", oldAadhar);
    printf("Enter new Aadhar: ");
    scanf("%s", newAadhar);

    while (temp != NULL) {
        if (strcmp(temp->aadhar, oldAadhar) == 0) {
            strcpy(temp->aadhar, newAadhar);
            printf("Aadhar updated successfully\n");
            return;
        }
        temp = temp->next;
    }
    printf("Aadhar not found\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Insert Aadhar\n");
        printf("2. Delete Aadhar\n");
        printf("3. Search Aadhar\n");
        printf("4. Modify Aadhar\n");
        printf("5. Display List\n");
        printf("6. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1: insertAtPosition(); break;
        case 2: deleteNode(); break;
        case 3: searchNode(); break;
        case 4: modifyAadhar(); break;
        case 5: display(); break;
        case 6: exit(0);
        default: printf("Invalid choice\n");
        }
    }
    return 0;
}
`,
    '13. Circular linked list - Create, Delete, Search, Display': `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *head = NULL;

/* Create Circular Linked List */
void create() {
    int n, i, value;
    struct Node *newNode, *temp;

    printf("Enter number of nodes: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        newNode = (struct Node*)malloc(sizeof(struct Node));
        printf("Enter data: ");
        scanf("%d", &value);

        newNode->data = value;

        if (head == NULL) {
            head = newNode;
            newNode->next = head;
            temp = head;
        } else {
            temp->next = newNode;
            newNode->next = head;
            temp = newNode;
        }
    }
}

/* Display Circular Linked List */
void display() {
    struct Node *temp;

    if (head == NULL) {
        printf("List is empty\n");
        return;
    }

    temp = head;
    do {
        printf("%d ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("\n");
}

/* Delete node from any position */
void deleteAtPosition() {
    int pos, i;
    struct Node *temp, *prev;

    if (head == NULL) {
        printf("List is empty\n");
        return;
    }

    printf("Enter position to delete: ");
    scanf("%d", &pos);

    temp = head;

    /* Delete first node */
    if (pos == 1) {
        if (head->next == head) {
            free(head);
            head = NULL;
            return;
        }

        while (temp->next != head)
            temp = temp->next;

        prev = head;
        head = head->next;
        temp->next = head;
        free(prev);
        return;
    }

    /* Delete other position */
    for (i = 1; i < pos && temp->next != head; i++) {
        prev = temp;
        temp = temp->next;
    }

    if (temp->next == head && i < pos) {
        printf("Invalid position\n");
        return;
    }

    prev->next = temp->next;
    free(temp);
}

/* Search an element */
void search() {
    int key;
    struct Node *temp;

    if (head == NULL) {
        printf("List is empty\n");
        return;
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    temp = head;
    do {
        if (temp->data == key) {
            printf("Element found\n");
            return;
        }
        temp = temp->next;
    } while (temp != head);

    printf("Element not found\n");
}

int main() {
    int choice;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Create\n");
        printf("2. Delete from any position\n");
        printf("3. Search element\n");
        printf("4. Display\n");
        printf("5. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1: create(); break;
        case 2: deleteAtPosition(); break;
        case 3: search(); break;
        case 4: display(); break;
        case 5: exit(0);
        default: printf("Invalid choice\n");
        }
    }
    return 0;
}
`,
    '14. Stack - Decimal to Binary, Octal, Hexadecimal': `#include <stdio.h>

#define MAX 50

int stack[MAX];
int top = -1;

/* Push operation */
void push(int x) {
    stack[++top] = x;
}

/* Pop operation */
int pop() {
    return stack[top--];
}

/* Convert decimal to given base */
void convert(int num, int base) {
    int rem;

    top = -1;   // reset stack

    while (num > 0) {
        rem = num % base;
        push(rem);
        num = num / base;
    }

    while (top != -1) {
        rem = pop();
        if (rem < 10)
            printf("%d", rem);
        else
            printf("%c", rem + 55);  // A-F
    }
}

int main() {
    int num;

    printf("Enter a decimal number: ");
    scanf("%d", &num);

    printf("\nBinary: ");
    convert(num, 2);

    printf("\nOctal: ");
    convert(num, 8);

    printf("\nHexadecimal: ");
    convert(num, 16);

    return 0;
}
`,
    '15. Stack - Infix to Postfix conversion & evaluation': `#include <stdio.h>
#include <ctype.h>

#define MAX 50

char stack[MAX];
int top = -1;

/* Stack operations */
void push(char x) {
    stack[++top] = x;
}

char pop() {
    return stack[top--];
}

/* Operator precedence */
int priority(char x) {
    if (x == '+' || x == '-')
        return 1;
    if (x == '*' || x == '/')
        return 2;
    return 0;
}

/* Infix to Postfix conversion */
void infixToPostfix(char infix[], char postfix[]) {
    int i, k = 0;
    char ch;

    for (i = 0; infix[i] != '\0'; i++) {
        ch = infix[i];

        /* If operand, add to postfix */
        if (isalnum(ch)) {
            postfix[k++] = ch;
        }
        /* If '(', push */
        else if (ch == '(') {
            push(ch);
        }
        /* If ')', pop until '(' */
        else if (ch == ')') {
            while (stack[top] != '(')
                postfix[k++] = pop();
            pop(); // remove '('
        }
        /* If operator */
        else {
            while (top != -1 && priority(stack[top]) >= priority(ch))
                postfix[k++] = pop();
            push(ch);
        }
    }

    /* Pop remaining operators */
    while (top != -1)
        postfix[k++] = pop();

    postfix[k] = '\0';
}

/* Evaluate Postfix Expression */
int evaluatePostfix(char postfix[]) {
    int i;
    int s[MAX];
    int t = -1;

    for (i = 0; postfix[i] != '\0'; i++) {
        char ch = postfix[i];

        /* If operand */
        if (isdigit(ch)) {
            s[++t] = ch - '0';
        }
        /* If operator */
        else {
            int b = s[t--];
            int a = s[t--];

            switch (ch) {
                case '+': s[++t] = a + b; break;
                case '-': s[++t] = a - b; break;
                case '*': s[++t] = a * b; break;
                case '/': s[++t] = a / b; break;
            }
        }
    }
    return s[t];
}

int main() {
    char infix[MAX], postfix[MAX];

    printf("Enter infix expression: ");
    scanf("%s", infix);

    infixToPostfix(infix, postfix);
    printf("Postfix Expression: %s\n", postfix);

    printf("Result: %d\n", evaluatePostfix(postfix));

    return 0;
}
`,
    '16. Queue - Linear Queue': `#include <stdio.h>
#define MAX 50

int queue[MAX];
int front = -1, rear = -1;

/* Enqueue operation */
void enqueue(int x) {
    if (rear == MAX - 1) {
        printf("Queue is Full\n");
        return;
    }
    if (front == -1)
        front = 0;
    queue[++rear] = x;
    printf("Inserted: %d\n", x);
}

/* Dequeue operation */
void dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue is Empty\n");
        return;
    }
    printf("Deleted: %d\n", queue[front++]);
}

/* Peek operation */
void peek() {
    if (front == -1 || front > rear) {
        printf("Queue is Empty\n");
    } else {
        printf("Front element: %d\n", queue[front]);
    }
}

/* Display operation */
void display() {
    if (front == -1 || front > rear) {
        printf("Queue is Empty\n");
        return;
    }
    printf("Queue elements: ");
    for (int i = front; i <= rear; i++)
        printf("%d ", queue[i]);
    printf("\n");
}

int main() {
    int choice, value;

    do {
        printf("\n--- Linear Queue Menu ---\n");
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Peek\n");
        printf("4. Display\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                enqueue(value);
                break;
            case 2:
                dequeue();
                break;
            case 3:
                peek();
                break;
            case 4:
                display();
                break;
            case 5:
                printf("Exiting program...\n");
                break;
            default:
                printf("Invalid choice\n");
        }
    } while (choice != 5);

    return 0;
}
`,
    '17. Queue - Double Ended Queue (Deque)': `#include <stdio.h>
#define MAX 50

int deque[MAX];
int front = -1, rear = -1;

/* Insert at Front */
void enqueueFront(int x) {
    if (front == 0) {
        printf("Deque is Full at Front\n");
        return;
    }
    if (front == -1) {
        front = rear = 0;
    } else {
        front--;
    }
    deque[front] = x;
    printf("Inserted at front: %d\n", x);
}

/* Insert at Rear */
void enqueueRear(int x) {
    if (rear == MAX - 1) {
        printf("Deque is Full at Rear\n");
        return;
    }
    if (rear == -1) {
        front = rear = 0;
    } else {
        rear++;
    }
    deque[rear] = x;
    printf("Inserted at rear: %d\n", x);
}

/* Delete from Front */
void dequeueFront() {
    if (front == -1) {
        printf("Deque is Empty\n");
        return;
    }
    printf("Deleted from front: %d\n", deque[front]);
    if (front == rear) {
        front = rear = -1;
    } else {
        front++;
    }
}

/* Delete from Rear */
void dequeueRear() {
    if (rear == -1) {
        printf("Deque is Empty\n");
        return;
    }
    printf("Deleted from rear: %d\n", deque[rear]);
    if (front == rear) {
        front = rear = -1;
    } else {
        rear--;
    }
}

/* Peek Front */
void peekFront() {
    if (front == -1) {
        printf("Deque is Empty\n");
    } else {
        printf("Front element: %d\n", deque[front]);
    }
}

/* Display */
void display() {
    if (front == -1) {
        printf("Deque is Empty\n");
        return;
    }
    printf("Deque elements: ");
    for (int i = front; i <= rear; i++)
        printf("%d ", deque[i]);
    printf("\n");
}

int main() {
    int choice, value;

    do {
        printf("\n--- DEQUE Menu ---\n");
        printf("1. Enqueue Front\n");
        printf("2. Enqueue Rear\n");
        printf("3. Dequeue Front\n");
        printf("4. Dequeue Rear\n");
        printf("5. Peek Front\n");
        printf("6. Display\n");
        printf("7. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                enqueueFront(value);
                break;
            case 2:
                printf("Enter value: ");
                scanf("%d", &value);
                enqueueRear(value);
                break;
            case 3:
                dequeueFront();
                break;
            case 4:
                dequeueRear();
                break;
            case 5:
                peekFront();
                break;
            case 6:
                display();
                break;
            case 7:
                printf("Exiting program...\n");
                break;
            default:
                printf("Invalid choice\n");
        }
    } while (choice != 7);

    return 0;
}
`,
    '18. Trees - Binary Tree traversals': `#include <stdio.h>
#include <stdlib.h>

/* Structure of tree node */
struct node {
    int data;
    struct node *left, *right;
};

/* Create new node */
struct node* createNode(int value) {
    struct node* temp = (struct node*)malloc(sizeof(struct node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

/* Recursive insertion (simple BST style) */
struct node* insert(struct node* root, int value) {
    if (root == NULL)
        return createNode(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else
        root->right = insert(root->right, value);

    return root;
}

/* Inorder traversal */
void inorder(struct node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

/* Preorder traversal */
void preorder(struct node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

/* Postorder traversal */
void postorder(struct node* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

int main() {
    struct node* root = NULL;
    int choice, value;

    do {
        printf("\n--- Binary Tree Menu ---\n");
        printf("1. Insert Node\n");
        printf("2. Inorder Traversal\n");
        printf("3. Preorder Traversal\n");
        printf("4. Postorder Traversal\n");
        printf("5. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                root = insert(root, value);
                break;

            case 2:
                printf("Inorder: ");
                inorder(root);
                printf("\n");
                break;

            case 3:
                printf("Preorder: ");
                preorder(root);
                printf("\n");
                break;

            case 4:
                printf("Postorder: ");
                postorder(root);
                printf("\n");
                break;

            case 5:
                printf("Exiting program...\n");
                break;

            default:
                printf("Invalid choice\n");
        }
    } while (choice != 5);

    return 0;
}

`,
    '19. Trees - BST traversal & search': `#include <stdio.h>
#include <stdlib.h>

/* Structure of BST node */
struct node {
    int data;
    struct node *left, *right;
};

/* Create new node */
struct node* createNode(int value) {
    struct node* temp = (struct node*)malloc(sizeof(struct node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

/* Insert into BST */
struct node* insert(struct node* root, int value) {
    if (root == NULL)
        return createNode(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);

    return root;
}

/* Inorder traversal */
void inorder(struct node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

/* Preorder traversal */
void preorder(struct node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

/* Postorder traversal */
void postorder(struct node* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

/* Search in BST */
void search(struct node* root, int key) {
    if (root == NULL) {
        printf("Element not found\n");
        return;
    }
    if (key == root->data) {
        printf("Element found\n");
        return;
    }
    if (key < root->data)
        search(root->left, key);
    else
        search(root->right, key);
}

int main() {
    struct node* root = NULL;
    int choice, value;

    do {
        printf("\n--- Binary Search Tree Menu ---\n");
        printf("1. Insert\n");
        printf("2. Inorder Traversal\n");
        printf("3. Preorder Traversal\n");
        printf("4. Postorder Traversal\n");
        printf("5. Search\n");
        printf("6. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                root = insert(root, value);
                break;

            case 2:
                printf("Inorder: ");
                inorder(root);
                printf("\n");
                break;

            case 3:
                printf("Preorder: ");
                preorder(root);
                printf("\n");
                break;

            case 4:
                printf("Postorder: ");
                postorder(root);
                printf("\n");
                break;

            case 5:
                printf("Enter value to search: ");
                scanf("%d", &value);
                search(root, value);
                break;

            case 6:
                printf("Exiting program...\n");
                break;

            default:
                printf("Invalid choice\n");
        }
    } while (choice != 6);

    return 0;
}

`,
    '20. Trees - BST deletion': `#include <stdio.h>
#include <stdlib.h>

/* BST node structure */
struct node {
    int data;
    struct node *left, *right;
};

/* Create new node */
struct node* createNode(int value) {
    struct node* temp = (struct node*)malloc(sizeof(struct node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

/* Insert node into BST */
struct node* insert(struct node* root, int value) {
    if (root == NULL)
        return createNode(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);

    return root;
}

/* Find minimum value node (used in delete) */
struct node* findMin(struct node* root) {
    while (root->left != NULL)
        root = root->left;
    return root;
}

/* Delete a node from BST */
struct node* deleteNode(struct node* root, int key) {
    if (root == NULL)
        return root;

    if (key < root->data)
        root->left = deleteNode(root->left, key);
    else if (key > root->data)
        root->right = deleteNode(root->right, key);
    else {
        /* Node found */

        /* Case 1: No child */
        if (root->left == NULL && root->right == NULL) {
            free(root);
            return NULL;
        }
        /* Case 2: One child */
        else if (root->left == NULL) {
            struct node* temp = root->right;
            free(root);
            return temp;
        }
        else if (root->right == NULL) {
            struct node* temp = root->left;
            free(root);
            return temp;
        }
        /* Case 3: Two children */
        else {
            struct node* temp = findMin(root->right);
            root->data = temp->data;
            root->right = deleteNode(root->right, temp->data);
        }
    }
    return root;
}

/* Inorder traversal */
void inorder(struct node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main() {
    struct node* root = NULL;
    int choice, value;

    do {
        printf("\n--- BST Menu ---\n");
        printf("1. Insert\n");
        printf("2. Inorder Traversal\n");
        printf("3. Delete Node\n");
        printf("4. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                root = insert(root, value);
                break;

            case 2:
                printf("Inorder Traversal: ");
                inorder(root);
                printf("\n");
                break;

            case 3:
                printf("Enter value to delete: ");
                scanf("%d", &value);
                root = deleteNode(root, value);
                break;

            case 4:
                printf("Exiting program...\n");
                break;

            default:
                printf("Invalid choice\n");
        }
    } while (choice != 4);

    return 0;
}
`,
    '21. Trees - BST min & max element': `#include <stdio.h>
#include <stdlib.h>

/* BST node structure */
struct node {
    int data;
    struct node *left, *right;
};

/* Create new node */
struct node* createNode(int value) {
    struct node* temp = (struct node*)malloc(sizeof(struct node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

/* Insert node into BST */
struct node* insert(struct node* root, int value) {
    if (root == NULL)
        return createNode(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);

    return root;
}

/* Inorder traversal */
void inorder(struct node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

/* Find minimum value */
int findMin(struct node* root) {
    if (root == NULL)
        return -1;
    while (root->left != NULL)
        root = root->left;
    return root->data;
}

/* Find maximum value */
int findMax(struct node* root) {
    if (root == NULL)
        return -1;
    while (root->right != NULL)
        root = root->right;
    return root->data;
}

int main() {
    struct node* root = NULL;
    int choice, value;

    do {
        printf("\n--- BST Menu ---\n");
        printf("1. Insert\n");
        printf("2. Inorder Traversal\n");
        printf("3. Display Minimum\n");
        printf("4. Display Maximum\n");
        printf("5. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &value);
                root = insert(root, value);
                break;

            case 2:
                printf("Inorder Traversal: ");
                inorder(root);
                printf("\n");
                break;

            case 3:
                if (root == NULL)
                    printf("Tree is empty\n");
                else
                    printf("Minimum element: %d\n", findMin(root));
                break;

            case 4:
                if (root == NULL)
                    printf("Tree is empty\n");
                else
                    printf("Maximum element: %d\n", findMax(root));
                break;

            case 5:
                printf("Exiting program...\n");
                break;

            default:
                printf("Invalid choice\n");
        }
    } while (choice != 5);

    return 0;
}
`,
    '22. Graphs - Breadth First Search (BFS)': `#include <stdio.h>

#define MAX 10

int adj[MAX][MAX];
int visited[MAX];
int queue[MAX];
int front = -1, rear = -1;
int n;

/* Enqueue operation */
void enqueue(int v) {
    if (rear == MAX - 1)
        return;
    if (front == -1)
        front = 0;
    queue[++rear] = v;
}

/* Dequeue operation */
int dequeue() {
    if (front == -1 || front > rear)
        return -1;
    return queue[front++];
}

/* BFS function */
void BFS(int start) {
    int i, v;

    for (i = 0; i < n; i++)
        visited[i] = 0;

    enqueue(start);
    visited[start] = 1;

    printf("BFS Traversal: ");

    while (front <= rear) {
        v = dequeue();
        printf("%d ", v);

        for (i = 0; i < n; i++) {
            if (adj[v][i] == 1 && visited[i] == 0) {
                enqueue(i);
                visited[i] = 1;
            }
        }
    }
}

int main() {
    int i, j, start;

    printf("Enter number of vertices: ");
    scanf("%d", &n);

    printf("Enter adjacency matrix:\n");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &adj[i][j]);

    printf("Enter starting vertex: ");
    scanf("%d", &start);

    BFS(start);

    return 0;
}
`,
    '23. Graphs - Depth First Search (DFS)': `#include <stdio.h>

#define MAX 10

int adj[MAX][MAX];
int visited[MAX];
int n;

/* DFS function */
void DFS(int v) {
    int i;
    printf("%d ", v);
    visited[v] = 1;

    for (i = 0; i < n; i++) {
        if (adj[v][i] == 1 && visited[i] == 0) {
            DFS(i);
        }
    }
}

int main() {
    int i, j, start;

    printf("Enter number of vertices: ");
    scanf("%d", &n);

    printf("Enter adjacency matrix:\n");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &adj[i][j]);

    for (i = 0; i < n; i++)
        visited[i] = 0;

    printf("Enter starting vertex: ");
    scanf("%d", &start);

    printf("DFS Traversal: ");
    DFS(start);

    return 0;
}

`,
    '24. Hashing - Hash Table using Linear Probing': `#include <stdio.h>

#define SIZE 10

int hashTable[SIZE];

/* Initialize hash table */
void init() {
    for (int i = 0; i < SIZE; i++)
        hashTable[i] = -1;
}

/* Hash function */
int hashFunction(int key) {
    return key % SIZE;
}

/* Insert key */
void insert(int key) {
    int index = hashFunction(key);

    while (hashTable[index] != -1) {
        index = (index + 1) % SIZE;
    }
    hashTable[index] = key;
    printf("Inserted %d\n", key);
}

/* Search key */
void search(int key) {
    int index = hashFunction(key);
    int start = index;

    while (hashTable[index] != -1) {
        if (hashTable[index] == key) {
            printf("Key %d found at index %d\n", key, index);
            return;
        }
        index = (index + 1) % SIZE;
        if (index == start)
            break;
    }
    printf("Key not found\n");
}

/* Display hash table */
void display() {
    printf("Hash Table:\n");
    for (int i = 0; i < SIZE; i++) {
        if (hashTable[i] == -1)
            printf("Index %d : Empty\n", i);
        else
            printf("Index %d : %d\n", i, hashTable[i]);
    }
}

int main() {
    int choice, key;

    init();

    do {
        printf("\n--- Hash Table Menu ---\n");
        printf("1. Insert\n");
        printf("2. Search\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter key: ");
                scanf("%d", &key);
                insert(key);
                break;

            case 2:
                printf("Enter key to search: ");
                scanf("%d", &key);
                search(key);
                break;

            case 3:
                display();
                break;

            case 4:
                printf("Exiting program...\n");
                break;

            default:
                printf("Invalid choice\n");
        }
    } while (choice != 4);

    return 0;
}`
  };

  const handleCopy = async () => {
    if (selected && programs[selected]) {
      await navigator.clipboard.writeText(programs[selected]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{ padding: '5px', fontSize: '14px' }}
        >
          <option value="">Select Program</option>
          {Object.keys(programs).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {selected && (
        <div>
          <button
            onClick={handleCopy}
            style={{ 
              padding: '5px 10px', 
              marginBottom: '10px',
              cursor: 'pointer'
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          
          <pre style={{ 
            fontSize: '10px'
          }}>
            <code>{programs[selected]}</code>
          </pre>
        </div>
      )}
    </div>
  );
}