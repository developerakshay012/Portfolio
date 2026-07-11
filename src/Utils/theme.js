
export const toggleTheme = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");

  if (isDark) {
    html.classList.remove("dark");
    html.classList.add("light");
    localStorage.setItem("theme", "light");
    return false; // now light
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    return true; // now dark
  }
};


export const initialTheme = () => {

    const savedTheme = localStorage.getItem('theme') || "light"
    const html = document.documentElement;

    html.classList.remove('dark' , 'light')
    html.classList.add(savedTheme)


}