<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="html" encoding="UTF-16" indent="yes"/>
    
    
    <xsl:template match="ARQELEM">
            <html>
                <head>
                    <title>Arquivo de Arquiossítios de Portugal</title>
                    <meta charset="UTF-16"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <table class="w3-table w3-striped">
                        <tr class="w3-hover-red">
                            <th>Tipo:</th><td><xsl:value-of select="TIPO/@ASSUNTO"/></td>
                        </tr>
                        <tr class="w3-hover-green">
                            <xsl:choose>
                                <xsl:when test="IMAGEM">
                                    <th>Imagem:</th>
                                    <td>
                                        <img src="{IMAGEM/@NOME}"/>    
                                    </td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                        
                        <tr class="w3-hover-blue">
                            <th>Descrição:</th><td><xsl:value-of select="DESCRI"/></td>
                        </tr>
                        <tr class="w3-hover-red">
                            <xsl:choose>
                                <xsl:when test="CRONO">
                                    <th>Cronologia:</th><td><xsl:value-of select="CRONO"/></td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                        <tr class="w3-hover-green">
                            <th>Lugar:</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr class="w3-hover-blue">
                            <th>Freguesia:</th><td><xsl:value-of select="FREGUE"/></td>
                        </tr>
                        <tr class="w3-hover-red">
                            <th>Concelho:</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        <tr class="w3-hover-green">
                            <xsl:choose>
                                <xsl:when test="CODADM">
                                    <th>Código Administrativo:</th><td><xsl:value-of select="CODADM"/></td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                        <tr class="w3-hover-blue">
                            <xsl:choose>
                                <xsl:when test="LATITU">
                                    <th>Latitude e Longitude:</th><td><xsl:value-of select="LATITU"/>:<xsl:value-of select="LONGIT"/></td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                        <tr class="w3-hover-red">
                            <xsl:choose>
                                <xsl:when test="ALTITU">
                                    <th>Altitude:</th><td><xsl:value-of select="ALTITU"/></td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                        <tr class="w3-hover-green">
                            <xsl:choose>
                                <xsl:when test="ACESSO">
                                    <th>Acesso:</th><td><xsl:value-of select="ACESSO"/></td>
                                </xsl:when>
                            </xsl:choose>
                        </tr>
                        <tr class="w3-hover-blue">
                            <xsl:choose>
                                <xsl:when test="QUADRO">
                                    <th>Quadro:</th><td><xsl:value-of select="QUADRO"/></td>
                                </xsl:when>
                            </xsl:choose>         
                        </tr>
                        <tr class="w3-hover-red">
                            <xsl:choose>
                                <xsl:when test="AUTOR">
                                    <th>Autor:</th><td><xsl:value-of select="QUADRO"/></td>
                                </xsl:when>
                            </xsl:choose>         
                        </tr>                       
                        <tr class="w3-hover-green">
                            <th>Bibliografia:</th><td><xsl:value-of select="BIBLIO"/></td>
                        </tr>
                        <tr class="w3-hover-blue">
                            <xsl:choose>
                                <xsl:when test="DEPOSI">
                                    <th>Depósito:</th><td><xsl:value-of select="DEPOSI"/></td>
                                </xsl:when>
                            </xsl:choose>         
                        </tr>
                        <tr class="w3-hover-red">
                            <xsl:choose>
                                <xsl:when test="DESARQ">
                                    <th>Desarq:</th><td><xsl:value-of select="DESARQ"/></td>
                                </xsl:when>
                            </xsl:choose>         
                        </tr>
                        <tr class="w3-hover-green">
                            <xsl:choose>
                                <xsl:when test="INTERE">
                                    <th>Interesse:</th><td><xsl:value-of select="INTERE"/></td>
                                </xsl:when>
                            </xsl:choose>         
                        </tr>
                        <tr class="w3-hover-blue">
                            <xsl:choose>
                                <xsl:when test="INTERP">
                                    <th>Interpretação:</th><td><xsl:value-of select="INTERP"/></td>
                                </xsl:when>
                            </xsl:choose>         
                        </tr>
                        <tr class="w3-hover-red">
                            <xsl:choose>
                                <xsl:when test="TRAARQ">
                                    <th>Traarq:</th><td><xsl:value-of select="TRAARQ"/></td>
                                </xsl:when>
                            </xsl:choose>         
                        </tr>
                        <tr class="w3-hover-green">
                            <th>Data:</th><td><xsl:value-of select="DATA"/></td>
                        </tr>
                        <xsl:apply-templates select="file"/>
                    </table>
                    <hr/>
                    <address>
                        <a href="index.html#{generate-id()}">Visitar a Pagina Principal</a>
                    </address>
                </body>
            </html>
 
    </xsl:template>

</xsl:stylesheet>