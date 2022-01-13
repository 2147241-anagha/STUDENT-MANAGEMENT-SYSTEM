<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

  <html>
  <body>
    <h2>EMPLOYEE MANAGEMENT SYSTEM</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th> 
      <th>SALARY</th> 
      <th>EMAIL</th> 
      <th>MOBNUM</th> 
      <th>DESIGNATION</th>
      <th>PROMOTION</th>       
    </tr>
    <xsl:for-each select="COMPANY/EMPLOYEE">
    <xsl:if test="AGE >= 40">
      <tr>
        <td><xsl:value-of select="ID"/></td>
        <td><xsl:value-of select="NAME"/></td>
        <td><xsl:value-of select="AGE"/></td>
        <td><xsl:value-of select="SALARY"/></td>
        <td><xsl:value-of select="EMAIL"/></td>
        <td><xsl:value-of select="MOBNUM"/></td>
        <td><xsl:value-of select="DESIGNATION"/></td>
        <td><xsl:value-of select="PROMOTION"/></td>        
      </tr>
    </xsl:if>

    </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>