 
        const createScript = (scriptSrc) => {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.defer = true; 
            document.body.appendChild(script);
        };
    
        const getComponent = async (dir, elementId, scriptDir = null) => {
            try {
                const response = await fetch(dir);
                if (!response.ok) throw new Error(`Failed to load ${dir}`);
                
                const data = await response.text();
                document.getElementById(elementId).innerHTML = data;
    
                if (scriptDir) createScript(scriptDir);
            } catch (error) {
                console.error(`Error fetching ${dir}:`, error);
            }
        };

        export default getComponent;
        /* getComponent("../components/header/header.html", "header", "../sidebar.js");
        getComponent("../components/footer/footer.html", "footer", "");
        getComponent("../components/sidebar/sidebar.html", "sidebar", "/sidebar.js"); */
