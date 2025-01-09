const createScript = (scriptSrc) => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true; 
    document.body.appendChild(script);
};

const addNewEventListeners = (newID, action, fn) => {
    const element = document.getElementById(newID);
    if (!element) {
        console.error(`Element with ID "${newID}" not found`);
        return;
    }
    element.addEventListener(action, fn);
};

const getComponent = async (
    dir,      // The component directory
    elementId, // The default ID
    scriptDir = null, // Optional JavaScript file directory
    action,    // Event action to trigger the function
    fn         // Function to add as an event listener
) => {
    try {
        const response = await fetch(dir);
        if (!response.ok) throw new Error(`Failed to load ${dir}`);
        
        const data = await response.text();

        // Assign a unique ID and set content
        const originalElement = document.getElementById(elementId);
        if (!originalElement) throw new Error(`Element with ID "${elementId}" not found`);

        const newId = `id-${Math.random().toString(36).substr(2, 9)}`;
        originalElement.id = newId;
        originalElement.classList.add(elementId); // Add the original ID as a class
        originalElement.innerHTML = data;

        // Add event listeners
        if (action && fn) {
            addNewEventListeners(newId, action, fn);
        }

     

    } catch (error) {
        console.error(`Error fetching ${dir}:`, error);
    }
};

export default getComponent;

// Example Usage:
// getComponent("../components/header/header.html", "header", "../sidebar.js", "click", () => console.log("Header clicked"));
// getComponent("../components/footer/footer.html", "footer", null, "mouseover", () => console.log("Footer hovered"));
// getComponent("../components/sidebar/sidebar.html", "sidebar", "/sidebar.js", "click", () => console.log("Sidebar clicked"));
