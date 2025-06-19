/*! investment-wallet.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  try {
    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
      return Math.round(Math.random() * 20);
    };
    var areachartblue = document
      .getElementById("areachartblue1")
      .getContext("2d");
    var gradientblue = areachartblue.createLinearGradient(0, 0, 0, 300);
    gradientblue.addColorStop(0, "rgba(0, 73, 232, 1)");
    gradientblue.addColorStop(1, "rgba(0, 73, 232, 0)");

    var gradientred = areachartblue.createLinearGradient(0, 0, 0, 280);
    gradientred.addColorStop(0, "rgba(0, 73, 232, 0.5)");
    gradientred.addColorStop(1, "rgba(0, 73, 232, 0)");
    var myareachartblue = {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12"],
        datasets: [
          {
            label: "# of Votes",
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),

              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            radius: 0,
            backgroundColor: gradientblue,
            borderColor: "#015EC2",
            borderWidth: 0,
            borderRadius: 4,
            fill: true,
            tension: 0.5,
          },
          {
            label: "# of Votes",
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),

              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            radius: 0,
            backgroundColor: gradientred,
            borderColor: "#015EC2",
            borderWidth: 0,
            borderRadius: 4,
            fill: true,
            tension: 0.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          y: {
            display: true,
            beginAtZero: true,
          },
          x: {
            display: true,
          },
        },
      },
    };
    var myAreaChartblue1 = new Chart(areachartblue, myareachartblue);
    /* my area chart randomize */
    setInterval(function () {
      myareachartblue.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
          return randomScalingFactor();
        });
      });
      myAreaChartblue1.update();
    }, 3000);
  } catch (err) {
    console.log(err);
  }

  // obtener la data de las transacciones

  const getTransactions = () => {
    const token = AuthHelper.getToken();

    if (!token) {
      console.error("Token no encontrado. Asegúrate de estar autenticado.");
      alert("Debes iniciar sesión para acceder a esta información.");
    } else {
      fetch("https://backend.arkaltd.io/transactions/my", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Agregar el token al encabezado Authorization
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la red: respuesta no válida");
          }
          return response.json();
        })
        .then(({ transactions: data }) => {
          if (data.length > 0) {
            fillTransactions(data);
            // Inicializar variables para sumatoria
            let totalDepositos = 0;
            let totalRetiros = 0;

            // Iterar sobre las transacciones para calcular sumatorias
            data.forEach((transaction) => {
              if (transaction.tipo === "deposito") {
                totalDepositos += transaction.monto;
              } else if (transaction.tipo === "retiro") {
                totalRetiros += transaction.monto;
              }
            });
            let balance = totalDepositos - totalRetiros;
            // Mostrar resultados en pantalla

            document.getElementById(
              "total-retiros"
            ).textContent = `-$${(+totalRetiros).toFixed(2)}`;
          } else {
            console.log("No se encontraron transacciones.");
            alert("No hay transacciones disponibles.");
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const getInvestmentCalculated = () => {
    // Suponiendo que el token está disponible
    const token = AuthHelper.getToken(); // Reemplaza con tu método para obtener el token

    if (!token) {
      console.error("Token no encontrado. Asegúrate de estar autenticado.");
      alert("Debes iniciar sesión para acceder a esta información.");
    } else {
      fetch(`${backendURL}/investment/calculado`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Agregar el token al encabezado Authorization
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la red: respuesta no válida");
          }
          return response.json();
        })
        .then(({ resumen, inversiones }) => {
          document.getElementById(
            "total-balance"
          ).textContent = `$${(+resumen.montoTotalCon8).toFixed(2)}`;
          document.getElementById(
            "total-depositos"
          ).textContent = `$${(+resumen.montoTotalInicial).toFixed(2)}`;
          document.getElementById("inversion5").textContent = `$${(
            +resumen.montoTotalCon5 - resumen.montoTotalInicial
          ).toFixed(2)}`;
          document.getElementById("inversion8").textContent = `$${(
            resumen.montoTotalCon8 - resumen.montoTotalCon5
          ).toFixed(2)}`;
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const fillTransactions = (data) => {
    const transaccionesList = document.getElementById("lista-transacciones");
    transaccionesList.innerHTML = ""; // Limpiar contenido previo
    data.forEach((transaction) => {
      let listItem = "";
      if (transaction.tipo === "deposito") {
        // Generar HTML para depósitos
        listItem = `
                <li class="list-group-item theme-green">
                    <div class="row gx-3 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1">
                                <i class="bi bi-arrow-up-right h5"></i>
                            </div>
                        </div>
                        <div class="col">
                            <p class="mb-1 fw-medium">Depósito</p>
                            <p class="text-secondary small">${new Date(
          transaction.fecha
        ).toLocaleString()}</p>
                        </div>
                        <div class="col-auto">
                            <h6 class="text-theme-1">+ $ ${(
            transaction.monto / 1000
          ).toFixed(2)}k</h6>
                        </div>
                    </div>
                    </li>`;
      } else if (transaction.tipo === "retiro") {
        // Generar HTML para retiros
        listItem = `
                <li class="list-group-item">
                    <div class="row gx-3 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border">
                                <i class="bi bi-arrow-down-left h5"></i>
                            </div>
                        </div>
                        <div class="col">
                            <p class="mb-1 fw-medium">Retiro</p>
                            <p class="text-secondary small">${new Date(
          transaction.fecha
        ).toLocaleString()}</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ ${(transaction.monto / 1000).toFixed(
          2
        )}k</h6>
                        </div>
                    </div>
                    </li>`;
      }
      // Agregar el elemento al contenedor
      transaccionesList.innerHTML += listItem;
    });
  };

  const ExistsDeposits = async () => {
    const token = AuthHelper.getToken();

    if (!token) {
      console.error("Token no encontrado. Asegúrate de estar autenticado.");
      alert("Debes iniciar sesión para acceder a esta información.");
    } else {
      const response = await fetch(`${backendURL}/deposit/my`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Agregar el token al encabezado Authorization
          "Content-Type": "application/json",
        },
      });
      const myDeposits = await response.json();
      isFirstDeposit =
        !myDeposits.length ||
        !myDeposits.some((d) => d.sweepStatus === "confirmed");
      changeValueDeposit(myDeposits.length ? 500 : 49, false);
      // cambiar o quitar valor inicial de depósito
    }
  };
  const changeValueDeposit = (newValue, increaseAmount) => {
    // amountDepositInput.value = newValue;
    if (isFirstDeposit) {
      // Sumar o restar según increaseAmount
      valueToDeposit += increaseAmount ? newValue : -newValue;

      // Validar si el monto bajó de 549, debe volver a 49
      if (valueToDeposit < 549) {
        valueToDeposit = increaseAmount ? 549 : 49;
      }
    } else {
      // Sumar o restar según increaseAmount
      valueToDeposit += increaseAmount ? newValue : -newValue;

      // Validar mínimo de 500
      if (valueToDeposit < 500) {
        valueToDeposit = 500;
      }
    }
    document.getElementById("amountDepositToShow").innerHTML =
      valueToDeposit.toFixed(2);
  };

  const generateDeposit = async () => {
    const token = AuthHelper.getToken();

    if (!token) {
      console.error("Token no encontrado. Asegúrate de estar autenticado.");
      alert("Debes iniciar sesión para acceder a esta información.");
    } else {
      try {
        const response = await fetch(`${backendURL}/deposit/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: valueToDeposit,
          }),
        });
        const myDeposit = await response.json();
        if (!response.ok) throw new Error(myDeposit.message);
        const { amount_to_receive: amountUSDT, wallet_address } =
          myDeposit.data;
        const infoDiv = document.getElementById("info-deposit");
        infoDiv.innerHTML = `
            <h3>Enviar ${amountUSDT} USDT (TRC20) a la siguiente dirección:</h3>
            <div id="wallet-qr"></div>
            <p><strong>Dirección:</strong> ${wallet_address}</p>
            <p style="color: red;"><strong>Importante:</strong> El depósito será válido solo durante los próximos 10 minutos. Después de ese tiempo no será reconocido y deberás generar uno nuevo.</p>
            `;
        new QRCode(document.getElementById("wallet-qr"), {
          text: wallet_address,
          width: 200,
          height: 200,
          correctLevel: QRCode.CorrectLevel.H,
        });
      } catch (err) {
        alert(`No se pudo generar el deposito ${err.message}`);
      }
    }
  };


  document
    .getElementById("increase_amount")
    .addEventListener("click", () => changeValueDeposit(500, true));
  document
    .getElementById("decrease_amount")
    .addEventListener("click", () => changeValueDeposit(500, false));
  document
    .getElementById("depositSubmit")
    .addEventListener("click", () => generateDeposit());


  //tema de registro de contrato firmado

  const canvas = document.getElementById("signature-pad");
  // const downloadContract = document.getElementById("download-contract");

  // downloadContract.addEventListener('click', () => {
  //   getContractWoutSignature()
  //     .then(res => res.blob())
  //     .then(blob => {
  //       const url = URL.createObjectURL(blob);
  //       window.open(url, "_blank");
  //     });
  // });

  const getContractWoutSignature = async () => {
    const contractInit = await fetch("assets/pdf/arka_contract.pdf");
    return contractInit
  };

  const signaturePad = new SignaturePad(canvas);
  document.getElementById("clear").onclick = () => signaturePad.clear();

  document.getElementById("sign").onclick = async () => {
    // if (!fileInput.files.length) return alert("Selecciona un PDF primero");
    if (signaturePad.isEmpty()) return alert("Firma antes de insertar");

    const arrayBuffer = await getContractWoutSignature().then(res => res.arrayBuffer());
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);

    const signatureDataUrl = signaturePad.toDataURL();
    const signatureBytes = dataURLtoUint8Array(signatureDataUrl);
    const pngImage = await pdfDoc.embedPng(signatureBytes);
    const pngDims = pngImage.scale(0.5);

    const page = pdfDoc.getPages()[2];
    const { width, height } = page.getSize();

    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
    const fecha = new Date().toLocaleDateString("es-CO");
    page.drawText(`Firmado en fecha: ${fecha}`, {
      x: 80,
      y: 650,
      size: 11,
      font,
      color: PDFLib.rgb(0, 0, 0),
    });


    // colocar firma en la página
    page.drawImage(pngImage, {
      x: 175,
      y: 520,
      width: pngDims.width,
      height: pngDims.height,
    });

    const pdfBytes = await pdfDoc.save();
    //una vez firmado se sube al backend
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const formData = new FormData();
    const token = AuthHelper.getToken();
    formData.append("file", blob, "contrato_firmado.pdf");
    const response = await fetch(`${backendURL}/user/upload-contract`, {
      method: "POST",
      body: formData,
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (response.ok) {
      alert("Contrato enviado con éxito");
      download(pdfBytes, "application/pdf");
      getMyContract()
    } else {
      alert("Error al enviar el contrato");
    }
  };

  function dataURLtoUint8Array(dataURL) {
    const base64 = dataURL.split(",")[1];
    const binary = atob(base64);
    const len = binary.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) arr[i] = binary.charCodeAt(i);
    return arr;
  }

  function download(data, type) {
    const blob = new Blob([data], { type });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  const getMyContract = async () => {
    const token = AuthHelper.getToken();
    if (!token) {
      console.error("Token no encontrado. Asegúrate de estar autenticado.");
      alert("Debes iniciar sesión para acceder a esta información.");
    } else {
      const response = await fetch(`${backendURL}/user/get-my-contract`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Agregar el token al encabezado Authorization
        },
      });
      const contractInfo = await response.json();
      const downloadContract = document.getElementById("download-contract");
      if (response.ok) {
        document.getElementById("signatureContract").style = "display: none;";
        const contractStatus = document.getElementById("contractStatus");
        contractStatus.innerHTML = "Firmado";
        contractStatus.className = 'text-success';
        downloadContract.href = contractInfo.url;
      } else {
        contractStatus.innerHTML = "No Firmado";
        contractStatus.className = 'text-danger';
      }
      console.log(contractInfo);
    }

  }

  let valueToDeposit = 0;
  let isFirstDeposit = false;
  getTransactions();
  getInvestmentCalculated();
  ExistsDeposits();
  getMyContract();
});
