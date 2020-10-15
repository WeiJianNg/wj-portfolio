import tictactoeImg from "../images/TicTacToe.jpg";
import pathfindingImg from "../images/PathFinding.jpg";
import sortvisualiserImg from "../images/SortVisualiser.jpg";
import SoilImg from "../images/Soil.jpg";
import ExcelImg from "../images/Excel.jpg";

let ProjectData = [
  // {
  //   title: "Sudoku Solver",
  //   image: SudokuImg,
  //   language: ["Javascript", "Python", "React", "Django"],
  //   path: "/sodukusolver",
  //   link: "",
  //   aims: [
  //     "Visualise the recursive backtracking algorithm to solve and generate a soduku puzzle.",
  //     "Generate a sudoku puzzle by taking/uploading a picture.",
  //     "Implement a backend (Django) server which will process the picture using Python OpenCV library and returns the processed grid to the App.",
  //   ],
  //   lessons: [],
  //   linkIcon: "eye",
  // },
  {
    title: "Path Finding Visualiser",
    image: pathfindingImg,
    language: ["Javascript", "React"],
    path: "https://wj-pathfinding.netlify.app/",
    link: "",
    aims: [
      "To visualise the breadth-first search and A* algorithm in finding a path in a 2d grid",
      "To visualise different maze generation algorithm such as recursive division, recursive backtracking and Prim's algorithm",
    ],
    lessons: [
      "Learnt how to develop frontend application using React",
      "Learnt how to manage application state using Redux",
    ],
    linkIcon: "eye",
  },
  {
    title: "Sort Visualiser",
    image: sortvisualiserImg,
    language: ["Javascript", "React"],
    path: "https://wj-sortvisualiser.netlify.app/",
    link: "",
    aims: [
      "To visualise sorting algorithms such as Bubble Sort, Insertion Sort, Selection Sort, Quick Sort and Heap Sort",
    ],
    lessons: [
      "Learnt how to develop frontend application using React",
      "Learnt how to manage application state using Redux",
    ],
    linkIcon: "eye",
  },
  {
    title: "Tic-Tac-Toe",
    image: tictactoeImg,
    language: ["Javascript", "React"],
    path: "https://wj-tictactoe.netlify.app/",
    aims: [
      "Build a Tic-Tac-Toe game with React Library with multiplayer and bot options",
    ],
    lessons: [
      "First frontend application developed using React",
      "Learnt how to manage application state using Redux",
    ],
    linkIcon: "eye",
  },
  {
    title: "Python: Borehole Logs Extractor",
    image: SoilImg,
    language: ["Python"],
    path: "",
    link: "https://github.com/WeiJianNg/BGS_boreholelogs_extractor",
    aims: [
      "Develop a Python script to extract Borehole logs (open source data) from British Geological Survey (BGS) website",
    ],
    lessons: [
      "Learnt how to scrape web data using Python",
      "Developed knowledge on the structure of a HTML page",
      "Developed knowledge in how an API works",
    ],
    linkIcon: "eye",
  },
  {
    title: "Excel AddIn: Charts Generator",
    image: ExcelImg,
    language: ["Excel-VBA"],
    path: "",
    link: "https://github.com/WeiJianNg/vba-chartgenerator",
    aims: [
      "Allow users who are more comfortable using Excel to visualise large dataset quickly",
      "Generate charts based on user defined classification fields",
    ],
    lessons: ["Learnt how to develop an Excel Addin"],
    linkIcon: "eye",
  },
];

export default ProjectData;
