document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const addBtn = document.getElementById("add-btn");
  const taskList = document.getElementById("task-list");
  const todaySpan = document.getElementById("today");

  // 今日の日付を表示（YYYY/MM/DD形式）
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  todaySpan.textContent = `${year}/${month}/${day}`;

  // タスクを追加する関数
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const label = document.createElement("label");
      label.textContent = taskText;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "×"; // ボタンのテキストを×に設定

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      taskInput.value = "";

      // チェックボックスの状態を切り替えるイベントリスナー
      checkbox.addEventListener("change", () => {
        listItem.classList.toggle("completed"); // li要素にcompletedクラスを追加/削除
      });

      // 削除ボタンのイベントリスナー
      deleteButton.addEventListener("click", () => {
        listItem.remove();
      });
    }
  }

  // 追加ボタンがクリックされたときにタスクを追加
  addBtn.addEventListener("click", addTask);

  // Enterキーが押されたときにもタスクを追加
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
